 
import React from "react";
import { Link } from "react-router-dom";


export default function OrganizationDisplay({ newOrganization, setCurrentOrg={setCurrentOrg} }) {
  //console.log(newOrganization);

  


  return (
    <div>
    
    <div className="container" key={newOrganization.id}>
      <ul className="list-group">
        <li className="list-group-item">{newOrganization.name}
        <Link to= "/orginfo" className="btn" onClick= {() => setCurrentOrg(newOrganization)}> More info</Link>
        </li>
      </ul>
     
    </div>
    </div>
  );
}
