import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import Items from "./pages/ItemsPage";
import Privacy from "./pages/PrivacyPage";
import Faq from "./pages/FaqPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="items" element={<Items />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
