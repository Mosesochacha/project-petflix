import axios from "axios";
import "./Org.css"
// import AboutOrg from "./AboutOrg";
import React, { useEffect, useState } from "react";
import OrganizationDisplay from "./OrganizationsDisplay";
const URL = " https://api.petfinder.com/v2/organizations";

const token =
"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJKUjdRcVJkQ1M2Y2FvbVQ3TURPRTlZQURJSkU1ZGVpbWg2UGVoeW00UUFPUnlvZkk5TSIsImp0aSI6IjZhYWRmMmY2NWFkZTIwMDI0ZmUxMzI3MzI0NmU0Yjg2N2QyNDdkMzZmNmZlMzI3OTA2ZGM1YzVjZWE2NTBkYmUzOGI4M2JhZDUxYTY0OTE1IiwiaWF0IjoxNjc0NzYwNTMyLCJuYmYiOjE2NzQ3NjA1MzIsImV4cCI6MTY3NDc2NDEzMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.aYtx45I2vtQEOfth2mWx99n883GjrZLMBwDFyXBQ0qoxbX5fUGJ4EG1VJSTAk7hiuxhH3aLIXl6zWoeZjAWFwc4enSiEAoeUdgXiJOrs-A4ffQ6Ypy0a50ULDu74L4fvTdX3yQ7nA0RovuddJ5CAGK77PGN1ZNPnchzSXwv-mw07qMqvg_MZHQ3vmPG1zxkTKJeLVLcCZE0cFFv_uLeE2L_Oa3r_RYovQZZEiqgisfsHlJhwAPLfDSv8_i1hQ3g0UgUf9PSVhF0SX1IKBJLH5jMsnxWSYWV5TWhIZ4M51v-vwjoLNPcshWsx3LdtyhHMQkPKjvdFFzbILcQPipIzYw"


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
