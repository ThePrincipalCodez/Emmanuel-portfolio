import React, { useState } from "react";
import "./nav.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import NavIcons from "./navicons";
import { iconsdata } from "./iconsdata";


export default function Nav() {
    const renderIcons = iconsdata.map(e => {
        return <NavIcons key={e.id} {...e} />
    })

    const [navColor, setNavColor] = useState(1)

    const swapColor = (index) => {
      setNavColor(index)
    }


  return (
    <div className="nav-wrapper">
      <BrowserRouter>
        <ul className="nav-list">
          <li onClick={() => swapColor(1)} >
            <Link to="#about" smooth>
              <h3 className={navColor === 1 ? 'main-active-nav' : 'main-default'}>About</h3>
            </Link>
          </li>
          <li onClick={() => swapColor(2)} >
            <Link to="#skills" smooth>
              <h3 className={navColor === 2 ? 'main-active-nav' : 'main-default'}>Skills</h3>
            </Link>
          </li>
          <li onClick={() => swapColor(3)}>
            <Link to="#certifications" smooth>
              <h3 className={navColor === 3 ? 'main-active-nav' : 'main-default'}>Certifications</h3>
            </Link>
          </li>
          <li onClick={() => swapColor(4)}>
            <Link to="#contact" smooth>
              <h3 className={navColor === 4 ? 'main-active-nav' : 'main-default'}>Contact</h3>
            </Link>
          </li>
        </ul>
      </BrowserRouter>
      <div className="social-icons">
        {renderIcons}
      </div>
    </div>
  );
}
