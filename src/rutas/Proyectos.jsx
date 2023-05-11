import React from "react";
import Navegacion from "../componentes/Navegacion/Navegacion";
import ProjectImg from "../componentes/ProjectImg/ProjectImg";

const Proyectos = () => {
    return (
        <div>
            <Navegacion />
            <ProjectImg heading="PROYECTOS" text="Aquí hay algunos proyectos realizados por mí" />
        </div>
    );
};

export default Proyectos;