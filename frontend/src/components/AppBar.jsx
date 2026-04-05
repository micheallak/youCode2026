import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, MenuItem, Select } from "@mui/material";

export default function AppBar() {
    const navigate = useNavigate();
    const [language, setLanguage] = useState('English')


    const handleCancel = () => {

        navigate('/')
    }

   

    return (
        <div style = {{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#D1E1EE",
            color: "white",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
        }}
        >
            <Select
                value={language}
            >
                <MenuItem value="Language" disabled>Language</MenuItem>
                <MenuItem>English</MenuItem>
                <MenuItem>French</MenuItem>
                <MenuItem>Punjabi</MenuItem>
                <MenuItem>Mandarin</MenuItem>
                <MenuItem>Tagalog</MenuItem>

            </Select>
            <Button
                variant="text"
                onClick={handleCancel}
            >
                CANCEL
            </Button>

        </div>
    )
}