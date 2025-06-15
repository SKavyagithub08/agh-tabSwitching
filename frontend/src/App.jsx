import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestPage from "./components/TestPageComponent/TestPage.jsx";
import DisconnectPage from "./components/DisconnectComponent/DisconnectPage.jsx";

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
