// import AppBar from "../components/AppBar";
// import { useLanguage } from "../LanguageContext";
// import { useInput } from "../inputContext";
// import {useEffect} from "react";
// import { savePendingSubmission } from "../utils/offlineQueue";
// import { syncPendingSubmissions } from "../utils/syncPending";

// function generateSubmissionId() {
//   return crypto.randomUUID();
// }

// export default function Submit() {
//     const { t } = useLanguage();
//     const { input: userInput } = useInput();

//     useEffect(() => {
//         async function submitData() {
//       if (
//         userInput.mood === null ||
//         userInput.energy === null ||
//         userInput.food_status === null
//       ) {
//         return;
//       }

//       const submission = {
//         ...userInput,
//         clientSubmissionId: generateSubmissionId(),
//         createdAt: new Date().toISOString(),
//       };

//       try {
//         const response = await fetch("http://localhost:8080/api/user-input", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(submission),
//         });

//         if (!response.ok) {
//           throw new Error("Server responded with an error");
//         }

//         await syncPendingSubmissions();
//       } catch (error) {
//         console.warn("Saving submission locally for later sync:", error);
//         await savePendingSubmission(submission);
//       }
//     }

//     submitData();
//   }, [userInput]);

//         return (
//             <div>
//                 <AppBar />
//                 <h1>{t.thankYou}</h1>
//                 <h3>{t.responseRecorded}</h3>
//             </div>
//         )
// }


import AppBar from "../components/AppBar";
import { useLanguage } from "../LanguageContext";
import { useInput } from "../inputContext";
import { useEffect } from "react";
import { savePendingSubmission } from "../utils/offlineQueue";

function generateSubmissionId() {
  return crypto.randomUUID();
}

export default function Submit() {
  const { t } = useLanguage();
  const { input: userInput } = useInput();

  useEffect(() => {
    async function submitData() {
      if (
        userInput.mood === null ||
        userInput.energy === null ||
        userInput.food_status === null
      ) {
        console.log("User input incomplete, skipping submit");
        return;
      }

      const submission = {
        ...userInput,
        clientSubmissionId: generateSubmissionId(),
        createdAt: new Date().toISOString(),
      };

      console.log("Submitting:", submission);

      try {
        const response = await fetch("http://localhost:8080/api/user-input", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submission),
        });

        console.log("Immediate submit response:", response.status);

        if (!response.ok) {
          throw new Error("Server responded with error");
        }

        console.log("Submission sent successfully");
      } catch (error) {
        console.warn("Submit failed, saving offline:", error);
        await savePendingSubmission(submission);
      }
    }

    submitData();
  }, [userInput]);

  return (
    <div>
      <AppBar />
      <h1>{t.thankYou}</h1>
      <h3>{t.responseRecorded}</h3>
    </div>
  );
}