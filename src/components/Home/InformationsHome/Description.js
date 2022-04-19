import React from "react";
import imgSport from "../../../images/family_sport.png";

const Description = () => {
  return (
    <div className="description_home">
      <div className="text_description">
        <p>
          Hi, <b>Sophia</b>
        </p>
        <p>
          Plan your days to be more productive, you have 3 daily taks to
          complete today
        </p>
      </div>
      <div>
        <img src={imgSport} alt="family playing volleyball"></img>
      </div>
    </div>
  );
};

export default Description;
