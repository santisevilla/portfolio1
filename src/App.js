import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Inicio from "./rutas/Inicio"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* <Route path="/sobremi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} /> */}
      </Routes>
    </>
  );
}

export default App;
