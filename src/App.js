import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Inicio from "./rutas/Inicio"
import Contacto from "./rutas/Contacto";
import SobreMi from "./rutas/SobreMi";
import Proyectos from "./rutas/Proyectos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sobremi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </>
  );
}

export default App;
