import React from "react";
import Navegacion from "../componentes/Navegacion/Navegacion";
import ProjectImg from "../componentes/ProjectImg/ProjectImg";
import TextWithImage from "../componentes/About/About"
import Image from "../imagenes/fondo.jpg"

const SobreMi = () => {
    return (
        <div>
            <Navegacion />
            <ProjectImg heading="SOBRE MÍ" text="Este es el sobre mí" />
            <TextWithImage text="Este es un ejemplo de textosdasdasdasdasd"
                imageSrc={Image} />
        </div>
    );
};

export default SobreMi;