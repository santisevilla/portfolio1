import React from "react";
import Navegacion from "../componentes/Navegacion/Navegacion";
import ProjectImg from "../componentes/ProjectImg/ProjectImg";
import Contact from "../componentes/Contacto/Contact";
import Telefono from "../imagenes/telefono.png"
import Correo from "../imagenes/correo.jpg"
import Linkedin from "../imagenes/linkedin.jpg"
import GitHub from "../imagenes/github.png"


const Contacto = () => {
  return (
    <div>
      <Navegacion />
      <ProjectImg heading="CONTACTO" text="Te dejo mis datos por si quieres contactarme!" />
      <div className="card-container">
        <Contact imageSrc={Telefono} title="Teléfono" description="2612574104" />
        <Contact imageSrc={Correo} title="Email" description="santisevilla@gmail.com" />
        <a href="https://www.linkedin.com/in/santiago-sevilla/" target="_blank"><Contact imageSrc={Linkedin} title="Linkedin" description="Santiago Sevilla" /></a>
        <a href="https://github.com/santisevilla" target="_blank"><Contact imageSrc={GitHub} title="GitHub" description="santisevilla" /></a>
      </div>
    </div>
  );
};

export default Contacto;