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
import Timeout from './Timeout'
import { useEffect } from "react";
import { syncPendingSubmissions } from "./utils/syncPending";


function App() {
  useEffect(() => {
  syncPendingSubmissions();

  function handleOnline() {
    console.log("Online event fired, waiting briefly before sync...");
    setTimeout(() => {
      syncPendingSubmissions();
    }, 1500);
  }

  window.addEventListener("online", handleOnline);

  return () => {
    window.removeEventListener("online", handleOnline);
  };
  }, []);

  return (
    <LanguageProvider>
      <InputProvider>
        <BrowserRouter>
            <Timeout />
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
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     // Run once when app loads
//     syncPendingSubmissions();

//     // Listen for internet reconnect
//     function handleOnline() {
//       console.log("Back online — syncing...");
//       syncPendingSubmissions();
//     }

//     window.addEventListener("online", handleOnline);

//     return () => {
//       window.removeEventListener("online", handleOnline);
//     };
//   }, []);

//   return (
//     <LanguageProvider>
//       <InputProvider>
//         <BrowserRouter>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/mood" element={<Mood />} />
//               <Route path="/energy" element={<Energy />} />
//               <Route path="/eat" element={<Eat />} />
//               <Route path="/submit" element={<Submit />} />
//             </Routes>
//         </BrowserRouter>      
//       </InputProvider>
//     </LanguageProvider>
//   )
// }

// export default App


// import { useEffect } from "react";
// import { syncPendingSubmissions } from "./utils/syncPending";