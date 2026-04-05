import { createContext, useContext, useState } from "react";

const InputContext = createContext();

export function InputProvider({ children }) {
    const [input, setInput] = useState({
        mood: null,
        energy: null,
        food_status: null
    });

    return (
        <InputContext.Provider value={{ input, setInput }}>
            {children}
        </InputContext.Provider>
    );
}

export const useInput = () => useContext(InputContext);