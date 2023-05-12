import React from "react";
import Navegacion from "../componentes/Navegacion/Navegacion";
import ProjectImg from "../componentes/ProjectImg/ProjectImg";
import About from "../componentes/About/About";

const SobreMi = () => {
    return (
        <div>
            <Navegacion />
            <ProjectImg heading="SOBRE MÍ" text="Este es el sobre mí" />
            <About />
        </div>
    );
};

export default SobreMi;