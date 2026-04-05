import { useNavigate } from "react-router-dom";
import React from "react";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useLanguage } from "../LanguageContext";

export default function AppBar() {
    const navigate = useNavigate();
    const {language, setLanguage} = useLanguage();

    const { t } = useLanguage();


    const handleCancel = () => {
        navigate('/')
    }

   

    return (
        <div style = {{
            display: "flex",
            justifyContent: "space-between",
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
            <img src="/appbarlogo.png" alt="logo" style={{width: "50px", height: "50px", marginRight: "10px"}} />
           
            <div style={{ display:"flex", alignItems:"center"}}>
                <FormControl size="small" sx={{minWidth: 120, background: "#FFFFFF"}}>
                    <InputLabel id="language-select-label">Language</InputLabel>
                    <Select
                        value={language}
                        label="Language"
                        id="basic-menu"
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="French">French</MenuItem>
                        <MenuItem value="Punjabi">Punjabi</MenuItem>
                        <MenuItem value="Mandarin">Mandarin</MenuItem>
                        <MenuItem value="Tagalog">Tagalog</MenuItem>

                    </Select>

                </FormControl>
                <Button
                    variant="text"
                    onClick={handleCancel}
                >
                    {t.cancel}
                </Button>
            </div>

        </div>
    )
}