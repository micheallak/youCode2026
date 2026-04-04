import AppBar from "../components/AppBar"
import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

export default function Energy() {
    const navigate = useNavigate();

    const handleEnter = () => {
        navigate('/eat')
    }
    return(
        <div>
            <AppBar />
            <h1>
                how are your energy levels?
            </h1>
            <Box
                sx={{
                    padding: "60px",
                }}
            >
                <Button onClick={handleEnter}>
                    <img src="/energy1.png" alt="low" style={{width: "150px", height: "150px"}} />
                </Button>
                <Button onClick={handleEnter}>
                    <img src="/energy2.png" alt="moderate" style={{width: "250px", height: "150px"}} />
                </Button>
                <Button onClick={handleEnter}>
                    <img src="/energy3.png" alt="high" style={{width: "400px", height: "150px"}} />
                </Button>
            </Box>
            {/* <Button variant="contained" onClick={handleEnter} sx={{background: "#8FB7D1"}}>
                Enter
            </Button> */}
        </div>
    )
}