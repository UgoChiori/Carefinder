import CareHeader from "./components/carefinder/CareHeader";
import Hospitals from "./components/hospitals/Hospitals";
import Navigation from "./components/navigation/Navigation";
import {  Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/LogIn";
import "./index.css"

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<CareHeader />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </>
  );
};

export default App;
