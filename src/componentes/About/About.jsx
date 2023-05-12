import React from 'react';

const TextWithImage = ({ text, imageSrc }) => {
    return (
        <div style={{ display: 'flex', marginLeft: "20px"}}>
            <div style={{ marginRight: '700px', color: "white" }}>Durante mi etapa de estudiante pude desarrollar habilidades participando en proyectos grupales. Al mismo tiempo realicé cursos desarrollando mi lógica de programación y tecnologías nuevas.
                Me apasiona la programación y considero que tiene un gran impacto e influencia en nuestras vidas.
                Mi objetivo es desarrollar mi carrera formando parte de una empresa que me permita aplicar todo lo aprendido hasta ahora y seguir creciendo tanto personal como profesionalmente para lograr los mejores resultados posibles.
                Si quieres saber más de mí, puedes conectar conmigo por Linkedin o mandarme un correo.</div>
            <img src={imageSrc} alt="Imagen" style={{ width: '600px', height: '500px', marginRight: "200px" }} />
        </div>
    );
};

export default TextWithImage;