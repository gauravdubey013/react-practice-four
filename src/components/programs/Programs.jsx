import React from "react";
import "./Programs.scss";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="prog" id="prog">
      <div className="prog-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text"> to shape you</span>
      </div>

      <div className="prog-cato">
        {programsData.map((program) => (
          <div className="cato">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
