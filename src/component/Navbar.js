import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/animals/">Animals</Link>
      <br />
      <Link to="/organizations">Organizations</Link>
      <br />
      <Link to="/categories">Animal Catergories</Link>
    </div>
  );
}

export default Navbar;
