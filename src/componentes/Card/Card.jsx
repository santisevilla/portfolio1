import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="card-container">
            <div className="project-card">
                <img className="img-project" src={props.imgsrc} alt="img" />
                <h2 className="project-title">{props.titulo}</h2>
                <div classname="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn" target="blank">
                            Ver
                        </NavLink>
                        <NavLink to={props.source} className="btn" target="blank">
                            Código
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;