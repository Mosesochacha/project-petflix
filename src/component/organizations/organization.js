import axios from "axios";
import "./Org.css";
import "../homepage.css";

// import AboutOrg from "./AboutOrg";
import React, { useEffect, useState } from "react";
import OrganizationDisplay from "./OrganizationsDisplay";
const URL = " https://api.petfinder.com/v2/organizations";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUQlVXamZ4bHpYS3NwdU1neUx5VGF2RGpOV2FqMGhyUFJ5MXgzbkZCQUNxbGM2c3dMcyIsImp0aSI6IjM3ZjMwZjFhZDY4MDIzNTAwNjNjZDQ4YzViNjNiZjE1ZTZjZDE5ZGE2NGVjOTdjZTJjNjQ0MjYyYmM5YzAyZmE1NzBkZGUzMmFiZGFjY2EyIiwiaWF0IjoxNjc0Nzg3OTg4LCJuYmYiOjE2NzQ3ODc5ODgsImV4cCI6MTY3NDc5MTU4OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.twoJcz9kD91TTsy7FYBpPacV897KZuheiXopv9oY2cwnH1Z50pvFl2Stc0GdsZwVdfSEV4mdTuo0IDED0bPipmSiTrPju3QNZjNV_FkBkwb6251IKzWMrgFLYrLFF1f97m-Rnyv0Rx3PZ-I6kdP5-YzP9XKGbWNqBLbMMOnfP1IkaiuVV7dNCjbenqbFkqlIkmWHjiiOMuamrYHkAavHAULGjkUnRFn1t7YsWoZrpWbwsBGuRYjSvk679SGBV6AGtFLx9-Gz1G0lDonLq_npHNJAqMAn3UxwCc5vBDL0cF_UxaUDt9GzJjHb84o76vYFxZHkHDxEKbSOhyDA3pl-6w";

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
