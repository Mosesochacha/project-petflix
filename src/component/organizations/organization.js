import axios from "axios";
import "./Org.css"
// import AboutOrg from "./AboutOrg";
import React, { useEffect, useState } from "react";
import OrganizationDisplay from "./OrganizationsDisplay";
const URL = " https://api.petfinder.com/v2/organizations";

const token =
"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJKUjdRcVJkQ1M2Y2FvbVQ3TURPRTlZQURJSkU1ZGVpbWg2UGVoeW00UUFPUnlvZkk5TSIsImp0aSI6IjM5NTRjZmQ1NTFiZmRmNmQ4MWU3YjAwYmNhNTU5YzEzNDk2YzhiZmJjMjdmNzU3OWM0N2FjNDVkMGQ4MTMxMTc4ZjBjZjEzNjRmZjZmZjExIiwiaWF0IjoxNjc0NzA1MjMzLCJuYmYiOjE2NzQ3MDUyMzMsImV4cCI6MTY3NDcwODgzMywic3ViIjoiIiwic2NvcGVzIjpbXX0.TsHjHNdPIw_g4oMH-Jj9KRPJSeNRa3wHRhgZQbaQdy5LRP1qn-yc8MPOeVEMM1mZNhCaqAnXbdrO4r1RbH08RbPYjPFPBIRIaKBfOvLsvF4ReoCX2bfY66OHG2_sK_Nl1oHgmrJt7gFQMjf3hNUSWxelFLikBMJ5mqVgyd42pm8lJPm7UFW4GI396ulS7nkqSj5o29VR3LnoR2uMz1veSrwBSTKa75RkFSDG2yfQt90XypeVZm15Vp4DHT_NPPB7QbwpfyOA6paVnMy18P5E5O-Y42LtnhVg1mDp_oOEG7DTumsM-fGqanWBnTsFIUf_g0ECNsBsUe61zAdPTPy5Pg"  
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
