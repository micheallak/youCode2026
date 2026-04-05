import AppBar from "../components/AppBar"
import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { useInput } from "../inputContext";

export default function Eat() {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const { setInput } = useInput();

    const handleEnter = (value) => {
        setInput(prev => ({...prev, food_status: value}))
        navigate('/submit')
    }
    return(
        <div>
            <AppBar />
            <h1>
                {t.eaten}
            </h1>
            <Box
                sx={{
                    padding: "60px",
                }}
            >
                <Button onClick={() => handleEnter(1)}>
                    <img src="/check.png" alt="yes" style={{width: "150px", height: "150px"}} />
                </Button>
                <Button onClick={() => handleEnter(0)}>
                    <img src="/x.png" alt="no" style={{width: "150px", height: "150px"}} />
                </Button>
            </Box>
            {/* <Button variant="contained" onClick={handleEnter} sx={{background: "#8FB7D1"}}>
                Enter
            </Button> */}
        </div>
    )
}