import React from "react";
import Navegacion from "../componentes/Navegacion/Navegacion";
import ProjectImg from "../componentes/ProjectImg/ProjectImg";
import Contact from "../componentes/Contacto/Contact";

const Contacto = () => {
  return (
    <div>
      <Navegacion />
      <ProjectImg heading="CONTACTO" text="Te dejo mis datos por si quieres contactarme!" />
      <Contact title="Teléfono" description="2612574104"/>
      <Contact title="Email" description="santisevilla.9@gmail.com"/>
      <Contact title="Linkedin" description="Santiago Sevilla"/>
      <Contact title="GitHub" description="santisevilla"/>
    </div>
  );
};

export default Contacto;