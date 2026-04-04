import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { getSessionId } from "../session";


export default function Home() {
    const navigate = useNavigate();

    const handleEnter = () => {
        getSessionId() 
        navigate('/mood')
    }

    return (
        <div>
            <img src="/logo.png" alt="logo" style={{width: "250px", height: "200px", borderRadius: "10%"}} />
            <h1>Welcome</h1>
            <Button variant="contained" onClick={handleEnter} sx={{background: "#8FB7D1"}}>
                Enter
            </Button>

        </div>
    )
}