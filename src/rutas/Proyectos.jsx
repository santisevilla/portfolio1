import React from "react";
import Navegacion from "../componentes/Navegacion/Navegacion";
import ProjectImg from "../componentes/ProjectImg/ProjectImg";
import Work from "../componentes/Work";

const Proyectos = () => {
    return (
        <div>
            <Navegacion />
            <ProjectImg heading="PROYECTOS" text="Aquí hay algunos proyectos realizados por mí" />
            <div className="card-container"> 
                <Work/>
            </div>
        </div>
    );
};

export default Proyectos;