import AppBar from "../components/AppBar";
import { useLanguage } from "../LanguageContext";
import { useInput } from "../inputContext";
import {useEffect} from "react";

export default function Submit() {
    const { t } = useLanguage();
    const { input: userInput } = useInput();

    useEffect(() => {
        if (userInput.mood === null || userInput.energy === null || userInput.food_status === null) return;
        fetch('http://localhost:8080/api/user-input', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInput)
        })
    }, [])

        return (
            <div>
                <AppBar />
                <h1>{t.thankYou}</h1>
                <h3>{t.responseRecorded}</h3>
            </div>
        )
}