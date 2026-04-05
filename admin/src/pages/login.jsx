import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = () => {
        if (username === 'user' && password === "1234") {
            navigate('/dashboard')
        } else {
            alert('Invalid username')
        }
    }

    return (
        <div className="flex items-center justify-center h-screen" 
            style={{
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", flex: 1, padding: "40px"
            }}
        >
          <img src="/logo.png" alt="logo" style={{width: "250px", height: "200px", borderRadius: "10%"}} />
            <h1 className="text-4xl font-bold" style={{ fontWeight: 'bold'}}>Admin Login</h1>
            <Box sx={{ backgroundColor: "#8FB7D1", padding: "20px", borderRadius: "8px", width: "400px"}}>
                <TextField label="Username" variant="outlined" fullWidth margin="normal" sx={{ backgroundColor: "#FFFFFF" }} 
                    value={username}
                    onChange={(e) => setUser(e.target.value)}
                />
                <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" sx = {{ backgroundColor: "#FFFFFF" }} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => {if (e.key === 'Enter') handleLogin()}}
                />
                <Button variant="contained" color="primary" fullWidth sx={{background: "#678ca3", mt: 2}} onClick={handleLogin}> 
                    Login
                </Button>
            </Box>

        </div>
    )
}