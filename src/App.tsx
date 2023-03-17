import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import BalancePage from "./pages/Balance";
import NewOperation from "./pages/New-Operation";
import Header from "./components/Header";
import SignUpPage from "./pages/Sign-up";

function App() {
  return (
    <div>
      <Header onSignOut={() => {}} />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<LoginPage />} />
          <Route path="/new-operation" element={<NewOperation />} />
          <Route path="/balance" element={<BalancePage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
