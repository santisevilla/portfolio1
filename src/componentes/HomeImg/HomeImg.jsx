import "./HomeImg.css";
import React from "react";
import Home from "../../imagenes/fondo.jpg";
import { Link } from "react-router-dom";
import Me from "../../imagenes/yo.jpg"

const HomeImg = () => {
  return (
    <div className="homeImg">
      <div className="mask">
        <img className="into-img" src={Home} alt="Home" />
      </div>
      <div className="content">
        <div className="me">
          <img className="me1" src={Me} />
        </div>
        <p>!Hola! Mi nombre es Santiago Sevilla</p>
        <h1>Full Stack Developer</h1>
        <div>
          <Link to="/sobremi" className="btn">
            Sobre Mí
          </Link>
          <Link to="/proyectos" className="btn">
            Proyectos
          </Link>
          <Link to="/contacto" className="btn">
            Contacto
          </Link>
          <Link to="/contacto" className="btn btn-light">
            Descargar CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeImg;