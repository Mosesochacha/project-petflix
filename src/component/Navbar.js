import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand" to="/animals/">Animals</Link>
      
      <Link className="navbar-brand"  to="/organizations">Organizations</Link>
      
      <Link className="navbar-brand" to="/categories">Animal Catergories</Link>
      <form class="d-flex" role="search">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
   <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
      </div>
      
    
    
    </nav>


// <nav class="navbar bg-body-tertiary">
//   <div class="container-fluid">
//   <a class="navbar-brand">Navbar</a>
//   <form class="d-flex" role="search">
//     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//     <button class="btn btn-outline-success" type="submit">Search</button>
//   </form>
// </div>
// </nav>
  );
}

export default Navbar;
