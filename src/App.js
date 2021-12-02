import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import About from "./pages/About";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import Barbershop from "./pages/Barbershop";
import Belmoris from "./pages/Belmoris";
import ConstructionMaterials from "./pages/ConstructionMaterials";
import Dentistry from "./pages/Dentistry";
import Electronics from "./pages/Electronics";
import Eyebrow from "./pages/Eyebrow";
import Lashmaker from "./pages/Lashmaker";
import Mobilcom from "./pages/Mobilcom";
import Tenants from "./pages/Tenants";
import UltraSoundDiagnostic from "./pages/UltraSoundDiagnostic";

function App() {
  console.log("app");

  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/barbershop" element={<Barbershop />} />
        <Route path="/belmoris" element={<Belmoris />} />
        <Route path="/constructionMaterials" element={<ConstructionMaterials />} />
        <Route path="/dentistry" element={<Dentistry />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/eyebrow" element={<Eyebrow />} />
        <Route path="/lashmaker" element={<Lashmaker />} />
        <Route path="/mobilcom" element={<Mobilcom />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/ultraSoundDiagnostic"
          element={<UltraSoundDiagnostic />}
        />
      </Routes>
      <MainFooter />
    </div>
  );
}

export default App;
