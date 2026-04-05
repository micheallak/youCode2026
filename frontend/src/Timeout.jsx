import { useEffect, useCallback } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useInput } from './inputContext';

export default function Timeout() {
    const navigate = useNavigate();
    const { setInput } = useInput();

    const handleTimeout = useCallback(() => {
        setInput({
            mood: null,
            energy: null,
            food_status: null
        });
        navigate('/'); 
    }, [navigate, setInput]);

    useEffect(() => {
        let timer = setTimeout(handleTimeout, 30000); 

        const resetTimer = () => {
            clearTimeout(timer);
            timer = setTimeout(handleTimeout, 30000);
        };

        window.addEventListener('click', resetTimer);
        window.addEventListener('keydown', resetTimer);
        window.addEventListener('mousemove', resetTimer);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('click', resetTimer);
            window.removeEventListener('keydown', resetTimer);
            window.removeEventListener('mousemove', resetTimer);
        }
        
    }, [handleTimeout]);

    return null
}