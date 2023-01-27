import React from "react";
import { Link } from "react-router-dom";

export default function OrganizationDisplay({
  newOrganization,
  setCurrentOrg 
}) {
  //console.log(newOrganization);

  return (
    <div className="Org">
      <div className="container" key={newOrganization.id}>
        <ul className="card">
          <li className="List">
            {newOrganization.name}
            <Link
              id="Btn"
              to="/orginfo"
              onClick={() => setCurrentOrg(newOrganization)}
            >
              {" "}
              More info
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
