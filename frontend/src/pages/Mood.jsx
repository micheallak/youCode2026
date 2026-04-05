import AppBar from "../components/AppBar"
import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { useInput } from "../inputContext";

export default function Mood() {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const { setInput } = useInput();

    const handleEnter = (value) => {
        setInput(prev => ({...prev, mood: value}))
        navigate('/energy')
    }
    return(
        <div>
            <AppBar />
            <h1>
                {t.howDoYouFeel}
            </h1>
            <Box
                sx={{
                    padding: "60px",
                }}
            >
                <Button onClick={() => handleEnter(1)}>
                    <img src="/1.png" alt="1/5" style={{width: "150px", height: "150px"}} />
                </Button>
                <Button onClick={() => handleEnter(2)}>
                    <img src="/2.png" alt="2/5" style={{width: "150px", height: "150px"}} />
                </Button>
                <Button onClick={() => handleEnter(3)}>
                    <img src="/3.png" alt="3/5" style={{width: "150px", height: "150px"}} />
                </Button>
                <Button onClick={() => handleEnter(4)}>
                    <img src="/4.png" alt="4/5" style={{width: "150px", height: "150px"}} />
                </Button>
                <Button onClick={() => handleEnter(5)}>
                    <img src="/5.png" alt="5/5" style={{width: "150px", height: "150px"}} />
                </Button>
            </Box>
            {/* <Button variant="contained" onClick={handleEnter} sx={{background: "#8FB7D1"}}>
                Enter
            </Button> */}
        </div>
    )
}