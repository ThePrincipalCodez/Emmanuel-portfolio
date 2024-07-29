import React from "react";
import "./skills.css";

export default function OtherSkills(props) {
  return (
    <div className="skill-cards">
      <div className="card-wrapper">
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}
