import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink to="/"exact>HOME</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">GALLERY</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
