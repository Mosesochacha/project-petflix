import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">


        <Link className="Link" to="/animals">
          Animals
        </Link>

        <Link className="LInk" to="/organizations">
          Organizations
        </Link>

        <Link className="Link" to="/categories">
          Animal Catergories
        </Link>

        <Link className="Link" to="/">
          LOG OUT
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
