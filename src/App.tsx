import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import BalancePage from "./pages/Balance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<LoginPage />} />

        <Route path="/balance" element={<BalancePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
