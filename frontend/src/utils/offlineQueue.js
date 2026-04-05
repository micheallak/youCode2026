import { openDB } from "idb";

const DB_NAME = "offline-submissions-db";
const STORE_NAME = "pending-submissions";

async function getDb() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "clientSubmissionId" });
      }
    },
  });
}

export async function savePendingSubmission(submission) {
  const db = await getDb();
  await db.put(STORE_NAME, submission);
  console.log("Saved to IndexedDB:", submission);
}

export async function getAllPendingSubmissions() {
  const db = await getDb();
  const all = await db.getAll(STORE_NAME);
  console.log("Pending submissions in IndexedDB:", all);
  return all;
}

export async function deletePendingSubmission(clientSubmissionId) {
  const db = await getDb();
  await db.delete(STORE_NAME, clientSubmissionId);
  console.log("Deleted from IndexedDB:", clientSubmissionId);
}

// import { openDB } from "idb";

// const DB_NAME = "offline-submissions-db";
// const STORE_NAME = "pending-submissions";

// async function getDb() {
//   return openDB(DB_NAME, 1, {
//     upgrade(db) {
//       if (!db.objectStoreNames.contains(STORE_NAME)) {
//         db.createObjectStore(STORE_NAME, { keyPath: "clientSubmissionId" });
//       }
//     },
//   });
// }

// export async function savePendingSubmission(submission) {
//   const db = await getDb();
//   await db.put(STORE_NAME, submission);
// }

// export async function getAllPendingSubmissions() {
//   const db = await getDb();
//   return db.getAll(STORE_NAME);
// }

// export async function deletePendingSubmission(clientSubmissionId) {
//   const db = await getDb();
//   await db.delete(STORE_NAME, clientSubmissionId);
// }