import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="Link" to="/">
          Home
        </Link>

        <Link className="Link" to="/animals/">
          Animals
        </Link>

        <Link className="LInk" to="/organizations">
          Organizations
        </Link>

        <Link className="Link" to="/categories">
          Animal Catergories
        </Link>

        <Link className="Link" to="/login">
          LOG OUT
        </Link>
        <form class="d-flex" role="search">
          <input
            className="form-control me-4"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success me-2" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
