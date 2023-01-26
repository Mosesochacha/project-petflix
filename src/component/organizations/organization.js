import axios from "axios";
import "./Org.css"
// import AboutOrg from "./AboutOrg";
import React, { useEffect, useState } from "react";
import OrganizationDisplay from "./OrganizationsDisplay";
const URL = " https://api.petfinder.com/v2/organizations";

const token =
"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUQlVXamZ4bHpYS3NwdU1neUx5VGF2RGpOV2FqMGhyUFJ5MXgzbkZCQUNxbGM2c3dMcyIsImp0aSI6IjBiMjcxZTBjMGVmYzg1ODg5ZWYyMmMyMTFjYWU3YmVjZmYxZjYxY2U0Yzg4YTU2MWQyNGZjMjhiZTg2YWQ5MWI2NTllOTcyNzg3ZWRiNjUxIiwiaWF0IjoxNjc0NzUwNzgxLCJuYmYiOjE2NzQ3NTA3ODEsImV4cCI6MTY3NDc1NDM4MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.q9RzjB5xyJHmuEZ5tzB-S-AjA2JB296EGLesl6_6QeGBTu5kpIee15kprAGcQZHu6wugO5qygQfQFoL1G8_Zierq900GqjY11oadeMtB1js0kF8vJR_fG6v12U_Mbq6QZPuCP6-aJFt0JwZfU4kCQuEf4gtChsmD1IzzUhsvV2Hk4YGYucwMkjah9NKzPSqUGjMoOt0viiBDO85vt6PgtLNMTTLwXZ5jJauv3aqa2T2UbhtwtaxtEIwjZfcn6QYaqznLxHlRbLumSudlf2MlXahB3tGSUJ2abwmIgPSvhyB4Htlmfn01GS9DXB8gQHtyY4PKzM7TRmcjmhwxrnh8GQ"


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
