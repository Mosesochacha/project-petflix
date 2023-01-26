import axios from "axios";
import "./Org.css"
// import AboutOrg from "./AboutOrg";
import React, { useEffect, useState } from "react";
import OrganizationDisplay from "./OrganizationsDisplay";
const URL = " https://api.petfinder.com/v2/organizations";

const token =
"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJKUjdRcVJkQ1M2Y2FvbVQ3TURPRTlZQURJSkU1ZGVpbWg2UGVoeW00UUFPUnlvZkk5TSIsImp0aSI6IjYxYzBkODc3ZDZhZTAzYzk4MzY5Njk4YTMxNTY5YTVlZTcwODViNWZiNmRhYzc2ZmJlMGFkOTljOTI2YWNmZGVlNTlkN2Q4MTQyYTE4ZGZjIiwiaWF0IjoxNjc0NzUwMTQ5LCJuYmYiOjE2NzQ3NTAxNDksImV4cCI6MTY3NDc1Mzc0OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.Al0QU9ghJArkROsn7gVopjwszp7Uc5YVeFXVrGDW2JTFdTTYWKHXTXiCrb_orV-IM4T1D6Ao6HJVYz_UBEvaGOqNFsPPnyWddOJzMYwN3W252PDrBeiECTgCRFLeEDaEajX_cZ9cZdDH4ODLIsp40p-ss47Qz-FLxO61M54EGp-ijsrVKTgJk9sA-uZEIQ4atjwMLrR2pMe46ikfWsA6gCkSHHPdfn7Xgft-ivY-2jLkEyOQuiXYksDEUV-S4Ir0aBeOjJzl32-fF-z3z-ozVWuTNlpMUu_Nqc67CzFyD3CTFYcTWS5jWWFzGjZSoXhZTSazpIfZ8fWROlPJwOpQcA"  
export default function Organization({setCurrentOrg}) {
  const [organizations, setOganization] = useState([]);

  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOganization(res.data.organizations);
      });
  }, []);
  //  console.log(organizations);

  return (
    <div className="Card">
      <h1>organizations</h1>
      {organizations.map((newOrganization) => {
        // console.log(newOrganization);
        return (
          <div key={newOrganization.id}>
            <div>
              <OrganizationDisplay 
            //   key={newOrganization.id}
              newOrganization={newOrganization} setCurrentOrg={setCurrentOrg}/>
              {/* <AboutOrg newOrganization={newOrganization} /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
