import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Mood from './pages/Mood'
import Energy from './pages/Energy' 
import Eat from './pages/Eat'
import Submit from './pages/Submit'
import { LanguageProvider } from './LanguageContext'
import { InputProvider } from './inputContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LanguageProvider>
      <InputProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mood" element={<Mood />} />
              <Route path="/energy" element={<Energy />} />
              <Route path="/eat" element={<Eat />} />
              <Route path="/submit" element={<Submit />} />
            </Routes>
        </BrowserRouter>      
      </InputProvider>
    </LanguageProvider>
  )
}

export default App
