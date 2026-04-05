// import AppBar from "../components/AppBar";
// import { useLanguage } from "../LanguageContext";
// import { useInput } from "../inputContext";
// import {useEffect} from "react";
// import { prompts, moodMap, energyMap, foodMap } from "../Prompts";

// export default function Submit() {
//     const { t } = useLanguage();
//     const { input: userInput } = useInput();

//     useEffect(() => {
//         if (userInput.mood === null || userInput.energy === null || userInput.food_status === null) return;
//         fetch('http://localhost:8080/api/user-input', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(userInput)
//         })
//     }, [])

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
import { prompts, moodMap, energyMap, foodMap } from "../Prompts";
import { Typography } from "@mui/material";
import { useEffect } from "react";

export default function Submit() {
    const { t } = useLanguage();
    const { input: userInput } = useInput();

    useEffect(() => {
        if (!userInput || userInput.mood === null || userInput.energy === null || userInput.food_status === null) return;

        fetch('http://localhost:8080/api/user-input', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInput)
        });
    }, [userInput]);

    const matchedPrompt = userInput
        ? prompts.find(p =>
            p.mood === moodMap[userInput.mood] &&
            p.energy === energyMap[userInput.energy] &&
            p.food_status === foodMap[userInput.food_status]
        )
        : null;

    const guidance = matchedPrompt
        ? matchedPrompt.guidance
        : [t.responseRecorded || "Thanks for submitting!"];

    return (
        <div>
            <AppBar />

            <Typography
                variant="h3"
                sx={{ textDecoration: "underline", marginBottom: "20px", fontWeight: "bold", textAlign: "center" }}
            >
                {t.thankYou || "Thank You"}
            </Typography>

            <ul>
                {guidance.map((g, idx) => (
                    <li key={idx}>
                        <Typography variant="h4">{g}</Typography>
                    </li>
                ))}
            </ul>
        </div>
    );
}