import axios from "axios";
import "./Org.css"
// import AboutOrg from "./AboutOrg";
import React, { useEffect, useState } from "react";
import OrganizationDisplay from "./OrganizationsDisplay";
const URL = " https://api.petfinder.com/v2/organizations";

const token =
"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUQlVXamZ4bHpYS3NwdU1neUx5VGF2RGpOV2FqMGhyUFJ5MXgzbkZCQUNxbGM2c3dMcyIsImp0aSI6IjVmMTcyMjU4NDM0NDNjZjdkZjQ5NThjODkzZDAzZWJiZGE3ZTJhMjU0ODY1ZDViMmJhZDNiNTAxMDZjMGI0ODdkYzA1MWU2ZTJkZjA2MjViIiwiaWF0IjoxNjc0NzU0ODMxLCJuYmYiOjE2NzQ3NTQ4MzEsImV4cCI6MTY3NDc1ODQzMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.ycIJu1_ERoEsKTn6-OPWynWWUFRwxnNMtE68355R5fUsXVDs0EwwBmm55tdroK3cxT6ypCdq2mW1DZM9X3dpaHA-7NiyLOQyAKF34CxHjg43MNJKfvsefyvHcMFWqwasqn_jnBTJlu09BcvKxd0NLxFZ8kSt4CUm__6FXfbi5PUJaTfCcPoFgf3XCDH_Uc6SYUYCM206YmTteb328ufl5m6N0vYjgdkSGSFxkwSBAQl-mg2tzH4_0JNh5YVUrL5T3SCR94hhZ8vde4z7BDllOi9iH5nVDvuaIkgT8B7T4v6Fk_DVays1HB91hpBkP4fsVFTZpatlmmyTM01ElXTo9Q"


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
