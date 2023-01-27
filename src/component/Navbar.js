import React from "react";
import { Link as NavLink } from "react-router-dom";
import "./homepage.css";

function Navbar() {
  return (
    <nav className="navUl">
      {/* <div className="navDivInUl"> */}

      <NavLink className="Linker" to="/animals">
        Animals
      </NavLink>

      <NavLink className="Linker" to="/organizations">
        Organizations
      </NavLink>

      <NavLink className="Linker" to="/categories">
        Animal Catergories
      </NavLink>

      <NavLink className="Linker" to="/">
        LOG OUT
      </NavLink>

      {/* </div> */}
    </nav>
  );
}

export default Navbar;
