import axios from "axios";
// import AboutOrg from "./AboutOrg";
import React, { useEffect, useState } from "react";
import OrganizationDisplay from "./OrganizationsDisplay";
const URL = " https://api.petfinder.com/v2/organizations";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJKUjdRcVJkQ1M2Y2FvbVQ3TURPRTlZQURJSkU1ZGVpbWg2UGVoeW00UUFPUnlvZkk5TSIsImp0aSI6IjQ4YmM1MWM5NDQ1YmE2NWE2YzcwMzVkYjcwNGRmY2MxYmNiNjc0MTBiOGU5NTI2NmYyYzQ3ZGY5NmIzNmRjNmNjYTJiMGFkMGE3NzM0MzI2IiwiaWF0IjoxNjc0NjQ3NDYxLCJuYmYiOjE2NzQ2NDc0NjEsImV4cCI6MTY3NDY1MTA2MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.ZG-cx_ZSv3GH4zY71J5pdxh184Cel8rZeDBV7jjpWRYdhnnRTY4j99xHzjaYY9wUDdK5Vj0ITiqFWVoMMvgwwPS3u3tGDXknDVQJXdf1RdXrs8JpbXHnftXiqmnvu0_K35lmAS_liH5Ku6iTyC_n_ZHo1pTeiORQjQDse_7LebGWxyBYnBL0ufxnLcar0GeaMM8EDYy3VQhrn5oXH8VdlHij8KMCJJIiraiwLg6yb5NXnX2adGIq57_Cs-My1OOaZTPgwxW-lPJ-oej0Kb4X92FLApRo8wr-Xhuw2HXa_9v9GEldTF1F0RLeRz7R3hh07Gy3rfqW16hJ7ebH__bLTA";
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
    <div>
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
