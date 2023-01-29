import axios from "axios";
import "./Org.css";
import "../homepage.css";

import React, { useEffect, useState } from "react";
import OrganizationDisplay from "./OrganizationsDisplay";
const URL = "https://org-db-file-vercel.vercel.app/organizations";

export default function Organization({ setCurrentOrg }) {
  const [organizations, setOganization] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setOganization(res.data);
    });
  }, []);

  return (
    <div className="CardOrg">
      <h1>organizations</h1>
      {organizations.map((newOrganization) => {
        return (
          <div key={newOrganization.id}>
            <div>
              <OrganizationDisplay
                newOrganization={newOrganization}
                setCurrentOrg={setCurrentOrg}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
