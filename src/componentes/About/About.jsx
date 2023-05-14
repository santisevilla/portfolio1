import React from 'react';
import "./About.css"
import Me from "../../imagenes/yo.jpg"

const About = () => {
    return (
        <div>
            <div className="me">
                <img className="me1" src={Me} />
            </div>
            <div className='aboutHeader'>
                <h2>👋¡Hola! Soy Santiago, estudiante en Tecnicatura Superior en Desarrollo de Software.</h2>
            </div>
            <div className='aboutContent'>
                <h3>
                    Durante mi etapa de estudiante pude desarrollar habilidades participando en proyectos grupales. Al mismo tiempo realicé cursos desarrollando mi lógica de programación y tecnologías nuevas.

                    Me apasiona la programación y considero que tiene un gran impacto e influencia en nuestras vidas.

                    Mi objetivo es desarrollar mi carrera formando parte de una empresa que me permita aplicar todo lo aprendido hasta ahora y seguir creciendo tanto personal como profesionalmente para lograr los mejores resultados posibles.
                    <br/>
                    <br/>
                    Algunas tecnologías que manejo son: HTML, CSS, JavaScript, ReactJS, NodeJs, Express, Sequelize, MySQL, MongoDB, Git, GitHub.
                    
                    
                    <br/>
                    <br/>
                    Si quieres saber más de mí, puedes conectar conmigo por Linkedin o mandarme un correo.
                </h3>
            </div>
        </div>
    );
};

export default About;