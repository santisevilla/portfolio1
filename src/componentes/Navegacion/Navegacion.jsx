import { Link } from "react-router-dom";
import "./Navegacion.css"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navegacion = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);
    
    return (
        <div className={color ? "header header-bg" : "header"}>
            <ul className={click ? "nav-menu.activate" : "nav-menu"}>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/sobremi">Sobre mí</Link>
                </li>
                <li>
                    <Link to="/proyectos">Proyectos</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
            </ul>
            <div className="menu-responsive" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}
            </div>
        </div>
    )
}

export default Navegacion