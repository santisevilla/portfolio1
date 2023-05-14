import "./HomeImg.css";
import React from "react";
import Home from "../../imagenes/fondo.jpg";
import { Link } from "react-router-dom";

const HomeImg = () => {
  return (
    <div className="homeImg">
      <div className="mask">
        <img className="into-img" src={Home} alt="Home" />
      </div>
      <div className="content">
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