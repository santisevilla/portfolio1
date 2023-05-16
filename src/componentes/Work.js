import React from "react";
import Card from "./Card/Card.jsx";
import DataCard from "./DataCard.js";

const Work = () => {
  return (
    <div className="container">
      <br></br>
      <div className="project-container">
        {DataCard.map((val, ind) => {
          return (
            <Card
              key={ind}
              imgsrc={val.imgsrc}
              titulo={val.titulo}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;