import React from "react";
import Navegacion from "../componentes/Navegacion/Navegacion";
import ProjectImg from "../componentes/ProjectImg/ProjectImg";
import Contact from "../componentes/Contacto/Contact";

const Contacto = () => {
  return (
    <div>
      <Navegacion />
      <ProjectImg heading="CONTACTO" text="Te dejo mis datos por si quieres contactarme!" />
      <Contact />
    </div>
  );
};

export default Contacto;