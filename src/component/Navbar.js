import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid" >
        
        <Link className="navbar-brand" to="/animals/">Animals</Link>
      
      <Link className="navbar-brand"  to="/organizations">Organizations</Link>
      
      <Link className="navbar-brand" to="/categories">Animal Catergories</Link>

      <Link className="navbar-brand" to="/">LOG OUT</Link>

      </div>
      
    
    
    </nav>



  );
}

export default Navbar;
