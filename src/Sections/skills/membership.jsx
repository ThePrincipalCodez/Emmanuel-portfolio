import React from "react";
import "./projectcard.css";

export default function Memberships(props) {
  return (
    <div className="memberships">
      <div className="list">
        <ul>
          <li>
            {" "}
            {props.title}
            <br />
            <a href={props.link}>
              {" "}
              <i style={{ color: "white" }}> click here </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
