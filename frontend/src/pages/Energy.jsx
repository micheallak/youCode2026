import AppBar from "../components/AppBar"
import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { useInput } from "../inputContext";

export default function Energy() {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const { setInput } = useInput();

    const handleEnter = (value) => {
        setInput(prev => ({...prev, energy: value}))
        navigate('/eat')
    }
    return(
        <div>
            <AppBar />
            <h1>
                {t.energy}
            </h1>
            <Box
                sx={{
                    padding: "60px",
                }}
            >
                <Button onClick={() => handleEnter(1)}>
                    <img src="/energy1.png" alt="low" style={{width: "150px", height: "150px"}} />
                </Button>
                <Button onClick={() => handleEnter(2)}>
                    <img src="/energy2.png" alt="moderate" style={{width: "250px", height: "150px"}} />
                </Button>
                <Button onClick={() => handleEnter(3)}>
                    <img src="/energy3.png" alt="high" style={{width: "400px", height: "150px"}} />
                </Button>
            </Box>
            {/* <Button variant="contained" onClick={handleEnter} sx={{background: "#8FB7D1"}}>
                Enter
            </Button> */}
        </div>
    )
}