import axios from "axios";
import "./Org.css"
// import AboutOrg from "./AboutOrg";
import React, { useEffect, useState } from "react";
import OrganizationDisplay from "./OrganizationsDisplay";
const URL = " https://api.petfinder.com/v2/organizations";

const token =
"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJKUjdRcVJkQ1M2Y2FvbVQ3TURPRTlZQURJSkU1ZGVpbWg2UGVoeW00UUFPUnlvZkk5TSIsImp0aSI6ImFjM2ZhNmVmN2YyMDc4MjBiZWRiMjgxYWEyOWIzMjRhNjc5ZGYxYTI0ZTc1OThmNGY1ZDc0N2I1MjBkYzVmNDUyOWNhYTYxOTM2ZjRkN2I3IiwiaWF0IjoxNjc0NzQzMzUyLCJuYmYiOjE2NzQ3NDMzNTIsImV4cCI6MTY3NDc0Njk1Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.qlpUsmdxs-09F6-rK9JuX1wcC-C2Sfg-yZSaQMcpybbq8JZyScuYN85qPRl-dTrMjuRXI4N5YMiwHchlqeLkGiGk5nmlWMy-SYjxDk80DwCcV-nzql5tH9jUWt-BzydZVW_2sZDmhmujY3yUJeVyhpu_8sfT2v3ktAa0JG5DVIAVobfPU5Rh5xDnxbS2_UGIHnVu5O5Z75qQYYOa7LNbsuDBqGwrc0rCB7Ulc2gfnrHfLi6CKbwbuThlTR4AwBtQSTFvsMS8l4rl3NuOb7yW688IPw2JN3guHsQFvvxlQKKpFDk_AjC8QBbfdqR1HknT8gtVc2XHpc-FWFkLQF3PyQ"  
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
