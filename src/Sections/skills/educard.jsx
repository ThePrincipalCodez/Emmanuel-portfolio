import React from "react";
import "./projectcard.css";

export default function EduCard(props) {

  return (
    <div className="cards">
      <div className="p-wrapper">
        <h3 className="title">{props.title}</h3>
        <h5 className="title">{props.description}</h5>
      </div>
    </div>
  );
}
