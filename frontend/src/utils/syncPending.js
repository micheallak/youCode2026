import {
  getAllPendingSubmissions,
  deletePendingSubmission,
} from "./offlineQueue";

const API_URL = "http://localhost:8080/api/user-input";

let isSyncing = false;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function syncPendingSubmissions() {
  if (isSyncing) {
    console.log("Sync already in progress, skipping");
    return;
  }

  if (!navigator.onLine) {
    console.log("Offline, not syncing");
    return;
  }

  isSyncing = true;

  try {
    console.log("Starting sync...");
    const pendingItems = await getAllPendingSubmissions();

    for (const item of pendingItems) {
      try {
        console.log("Trying item:", item.clientSubmissionId);

        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed item, keeping in queue:", item.clientSubmissionId);
        console.error("Payload was:", item);
        console.error("Server said:", errorText);
        continue;
        }

        await deletePendingSubmission(item.clientSubmissionId);
        console.log("Synced and removed:", item.clientSubmissionId);

        // small pause can help avoid weird bursts after reconnect
        await wait(200);
      } catch (error) {
        console.error("Error syncing item, keeping in queue:", item.clientSubmissionId, error);
        continue;
      }
    }
  } finally {
    isSyncing = false;
  }
}

// import {
//   getAllPendingSubmissions,
//   deletePendingSubmission,
// } from "./offlineQueue";

// const API_URL = "http://localhost:8080/api/user-input";

// export async function syncPendingSubmissions() {
//   console.log("syncPendingSubmissions called");
//   console.log("navigator.onLine =", navigator.onLine);

//   if (!navigator.onLine) return;

//   const pendingItems = await getAllPendingSubmissions();

//   for (const item of pendingItems) {
//     try {
//       console.log("Trying to sync item:", item);

//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(item),
//       });

//       console.log("Response status:", response.status);

//       if (!response.ok) {
//         console.error("Failed to sync item:", item.clientSubmissionId);
//         continue;
//       }

//       await deletePendingSubmission(item.clientSubmissionId);
//       console.log("Synced successfully:", item.clientSubmissionId);
//     } catch (error) {
//       console.error("Sync failed:", error);
//       break;
//     }
//   }
// }


// import {
//   getAllPendingSubmissions,
//   deletePendingSubmission,
// } from "./offlineQueue";

// const API_URL = "http://localhost:8080/api/user-input";

// export async function syncPendingSubmissions() {
//   if (!navigator.onLine) return;

//   const pendingItems = await getAllPendingSubmissions();

//   for (const item of pendingItems) {
//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(item),
//       });

//       if (!response.ok) {
//         console.error("Failed to sync item:", item.clientSubmissionId);
//         continue;
//       }

//       await deletePendingSubmission(item.clientSubmissionId);
//       console.log("Synced and removed:", item.clientSubmissionId);
//     } catch (error) {
//       console.error("Sync failed, will retry later:", error);
//       break;
//     }
//   }
// }