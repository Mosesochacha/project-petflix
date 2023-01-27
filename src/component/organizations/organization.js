import axios from "axios";
import "./Org.css";
import "../homepage.css";

// import AboutOrg from "./AboutOrg";
import React, { useEffect, useState } from "react";
import OrganizationDisplay from "./OrganizationsDisplay";
const URL = " https://api.petfinder.com/v2/organizations";

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUQlVXamZ4bHpYS3NwdU1neUx5VGF2RGpOV2FqMGhyUFJ5MXgzbkZCQUNxbGM2c3dMcyIsImp0aSI6IjIxNzY3OTEzNWQ1ZDllODg0NDFmMDIyOGJkNjY5MTNkYzUyZDFhNzNlYTc0MjU5MmU0MGU0YzRkZTQ1YWU3MmQyY2IzY2JkNDY2NmZiYmI3IiwiaWF0IjoxNjc0ODAyOTA4LCJuYmYiOjE2NzQ4MDI5MDgsImV4cCI6MTY3NDgwNjUwOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.Bpw2WNdG-lAn7hwXBMtUm1iH4ZtyIPDCNZcVV8EHvNpqdQIsCaOKhprYyIYY7rkf1fvfD929KdrqEB9X032lr-0B46CXxhNkm0Pgqtg0hlXVO6cQJnW8J_Rk3fJhwekHjxHQYdTdY5eTeFEd3AyWmGOvYhcNGsQVwMFPi1mK2wTKclAI8rBy2jXlZYTGjWi4qE875UleMTgGqofVI08vLMLPFFYyfKji_JS48kcwONyRWuTZt3fkLlP_p7EzuQaz37VXUxJ9AhIh_XbkCzRywYvAjD6J-h4Im__6wH7AqjQYo04dDVv8V2wUZGjzy7tlYAmXrn8qZyAcemD2zqLEEQ"
      

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
