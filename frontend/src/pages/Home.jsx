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
            <h1>Welcome</h1>
            <Button variant="contained" onClick={handleEnter} sx={{background: "#8FB7D1"}}>
                Enter
            </Button>

        </div>
    )
}