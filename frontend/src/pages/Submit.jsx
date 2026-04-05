import AppBar from "../components/AppBar";
import { useLanguage } from "../LanguageContext";

export default function Submit() {
    const { t } = useLanguage();

        return (
            <div>
                <AppBar />
                <h1>{t.thankYou}</h1>
                <h3>{t.responseRecorded}</h3>
            </div>
        )
}