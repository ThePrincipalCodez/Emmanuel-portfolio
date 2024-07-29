import React from "react";
import "./skills.css";

export default function Card(props) {
  return (
    <div className="skill-cards">
      <div className="card-wrapper">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.description}</p>
        <div className="card-images">{props.images}</div>
        {/* 
          <a href={props.link}>
            <button className="button">click me</button>
          </a>
        */}
      </div>
    </div>
  );
}
