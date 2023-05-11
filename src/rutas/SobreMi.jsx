import React from "react";
import Navegacion from "../componentes/Navegacion/Navegacion";
import ProjectImg from "../componentes/ProjectImg/ProjectImg";

const SobreMi = () => {
    return (
        <div>
            <Navegacion />
            <ProjectImg heading="SOBRE MI" text="Este es el sobre mí" />
        </div>
    );
};

export default SobreMi;