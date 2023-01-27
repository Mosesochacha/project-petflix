import axios from "axios";
import "./Org.css";
import "../homepage.css";

// import AboutOrg from "./AboutOrg";
import React, { useEffect, useState } from "react";
import OrganizationDisplay from "./OrganizationsDisplay";
const URL = " https://api.petfinder.com/v2/organizations";

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUQlVXamZ4bHpYS3NwdU1neUx5VGF2RGpOV2FqMGhyUFJ5MXgzbkZCQUNxbGM2c3dMcyIsImp0aSI6ImU1NWM2NWM5YzQyM2RiMzE1MTg0NGJhYWU0MDA3OTJhMGJhNjNjNzlmZmY5ZDJkMzhjNzIxZjU3ZWFlN2E1NzRhNWE4MDMzMDNjNzIxOTZhIiwiaWF0IjoxNjc0ODAwNjE5LCJuYmYiOjE2NzQ4MDA2MTksImV4cCI6MTY3NDgwNDIxOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.ooICYLxS0SPYesbBsKLzNZ6X_AYjvZ8YEEZKIt1DoaaAmlpQuOASwP1XlVkJ0xHMYniVQC3yWBwuaCTngcuQGFebW9GOWuD6Ln8pAmPsmztSZm-yRgmLQxGP8LD43zqfJRIsLW32wmvsro80WTLXfeB-XqwuDIh-ASa6Ii5ar-U_DwptMOhZGHDkRqzLIv-B5hP9cJZ2FN2t7toQ1bMkVfxGq8BLOr2_ZXSUT5JAgz1N_92GFA3QwlsnHfol82pCTksCFToNAlxAd4G4zthF6O8Myg0X9fgD7Y5NDNDHZHvX-3h_0_Zde2lG46MKjVOd6hUCIKu0CYa9eCejikq77Q"


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
