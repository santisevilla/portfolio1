import React from "react";
import Navegacion from "../componentes/Navegacion/Navegacion";
import ProjectImg from "../componentes/ProjectImg/ProjectImg";
import Contact from "../componentes/Contacto/Contact";

const Contacto = () => {
  return (
    <div>
      <Navegacion />
      <ProjectImg heading="CONTACTO" text="A continuación dejo mis datos de contacto!" />
      <Contact />
    </div>
  );
};

export default Contacto;