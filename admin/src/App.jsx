import { BrowserRouter } from 'react-router-dom'
import Dashboard from "./pages/dashboard";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App