import axios from "axios";
import "./Org.css"
// import AboutOrg from "./AboutOrg";
import React, { useEffect, useState } from "react";
import OrganizationDisplay from "./OrganizationsDisplay";
const URL = " https://api.petfinder.com/v2/organizations";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJKUjdRcVJkQ1M2Y2FvbVQ3TURPRTlZQURJSkU1ZGVpbWg2UGVoeW00UUFPUnlvZkk5TSIsImp0aSI6ImIxNjQyMzY1YTZkMjEyNzc4NjliZmIzNjI0M2FmOWUwYTYyYTIyZmU3MjBkM2UzODRjMmY3NWM2ODBmZWYzMTFhMGI2ZWZmYzMxYjI5M2ZmIiwiaWF0IjoxNjc0NjYxODExLCJuYmYiOjE2NzQ2NjE4MTEsImV4cCI6MTY3NDY2NTQxMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.DSCxLed82p6Xq4h6vGxO8Pmj2Vr52WenGrI-MHes6Ft6i5EOr9cpvzUuQYQ5G6j8EHBKs3KUiLCEvcCnOQZeGrRIeTgZRQb_I2vDlFYheXIVACNX5fHJjt9v83YQPlyMrMcfXUb_bGnafChJ5BoJtPHEMGRYtBD47OQyq_vm-ulAiu_8wJvm2CNhY4qXJry6JD0JbBB2X939FuUOw1U6WFX1x-qfoUn1O_Lgn_IxTcn_NUSNjS2exYblMNtVRWn2WuFYt31uBoQ8U6RXnmF-LmjXRx-FsDqlWi3BZ-lAd_z5Q0MjsC2XAH4ZbWOf6yYsC_k4UDrzsjP0PtDCdGof8w";
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
