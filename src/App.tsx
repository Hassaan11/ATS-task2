import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import Reports from "./pages/reports/reports";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
}

export default App;
