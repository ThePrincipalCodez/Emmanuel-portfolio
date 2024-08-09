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
            <a href={props.link} target="blank">
              {" "}
              <button style={{ color: "white", width: '100px', border: '1px solid white', borderRadius: '5px'}}> Visit </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
