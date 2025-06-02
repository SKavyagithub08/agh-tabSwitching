import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestPage from "./components/TestPage";
import DisconnectPage from "./components/DisconnectPage";
import './index.css'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/disconnected" element={<DisconnectPage />} />
      </Routes>
    </Router>
  )
}

export default App
