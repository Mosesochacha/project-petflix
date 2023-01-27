import axios from "axios";
import "./Org.css";
import "../homepage.css";

// import AboutOrg from "./AboutOrg";
import React, { useEffect, useState } from "react";
import OrganizationDisplay from "./OrganizationsDisplay";
const URL = " https://api.petfinder.com/v2/organizations";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJKUjdRcVJkQ1M2Y2FvbVQ3TURPRTlZQURJSkU1ZGVpbWg2UGVoeW00UUFPUnlvZkk5TSIsImp0aSI6ImM3ZjBhN2Y3Y2IwMGI1Mjc1MjEwNGExZmZjZGRhMDgyZjU4NjA1NDNkNDJmNDA5NTk3ZWI4YjRiYWQ1ZTNkMjI5YTVhMWY1YmRiM2Q5MmE1IiwiaWF0IjoxNjc0Nzk2ODM5LCJuYmYiOjE2NzQ3OTY4MzksImV4cCI6MTY3NDgwMDQzOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.rlTdleHA_66qtgwuGaeqTLWWvP2z5rL9avy40R6ENfurVtAyc-0L6ilzQKAoJQbtFuAoM-hwbmzA98wSaaBWe_WIrF8KbTmWf43kMbKBg7jThx1YAod2A0H30xwc9H3Dg1i_NhIi8-y2U2szc42S8gxM0KAVtivl9mY8mxmcPiEMoPk3Z3bxOqRfLDOBXmO1QqJoHS3tcgKG1RTfqEMF6IrkyP-Ai0Tfmhz950XiYDnyv1InDYrWPDaq-U9fC3Aa7egBe9Z88M0Z3OS6PwzHEKjeUoCPvFcfDBP8PMRjuJ_T07l70hQD35A7gHgq-AZIS_g961T2GOlJ7Q6Dbt7cPg";

export default function Organization({ setCurrentOrg }) {
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
    <div className="CardOrg">
      <h1>organizations</h1>
      {organizations.map((newOrganization) => {
        // console.log(newOrganization);
        return (
          <div key={newOrganization.id}>
            <div>
              <OrganizationDisplay
                //   key={newOrganization.id}
                newOrganization={newOrganization}
                setCurrentOrg={setCurrentOrg}
              />
              {/* <AboutOrg newOrganization={newOrganization} /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
