import { Routes, Route } from "react-router-dom";
//Components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Vault from "./components/Vault";

//Styling
import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vault" element={<Vault />} />
      </Routes>
    </div>
  )
}

export default App;
