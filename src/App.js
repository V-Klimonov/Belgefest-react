import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import About from "./pages/About";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import TenantPage from "./pages/TenantPage";
import Tenants from "./pages/Tenants";
import data from "./data.json";

function App() {


  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/tenants" element={<Tenants />} />
        {data.map((el, index) => {
          return (
            <Route
              path={el.path}
              key={index}
              element={
                <TenantPage
                  key={index*100}
                  pageData={data.find((item) => item.path === el.path)}
                />
              }
            />
          );
        })}
      </Routes>
      <MainFooter />
    </div>
  );
}

export default App;
