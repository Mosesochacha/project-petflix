import axios from "axios";
import "./Org.css";
import "../homepage.css";

// import AboutOrg from "./AboutOrg";
import React, { useEffect, useState } from "react";
import OrganizationDisplay from "./OrganizationsDisplay";
const URL = "https://org-db-file-vercel.vercel.app/organizations";

// const token =
  // "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJKUjdRcVJkQ1M2Y2FvbVQ3TURPRTlZQURJSkU1ZGVpbWg2UGVoeW00UUFPUnlvZkk5TSIsImp0aSI6IjdkNzlmYmYzODM4ODA5MjI3MGYxZjk3NzM2ZDIzYjNiOWEwYTJhYWI0NjNmZGNkOGU5NmE5M2JlZDc4NDk4ZTgyZGZiMjg1M2I0M2ZmNjQyIiwiaWF0IjoxNjc0OTA4NDY5LCJuYmYiOjE2NzQ5MDg0NjksImV4cCI6MTY3NDkxMjA2OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.dzj0I1igqk5VAVAOdRgUDgpb5Un-3T4cer3LbMMs1sSC_kxRPjDztgQqzBzbH9ALjiMH6EF4YBzrlCPiM5Jocu7iiwUh1qpc7yyhiE1OwueFPmasMIVQIaGcGDzurnNWaeiUrS_MQRSdpNRW8WiB7bFVKKEgxM154-wf51g2JzYMfB2DKCQQXAqzOM8J11cCDTI2m2_uXzqRv7-f2QAZOgaj3r09FnDPjP272H3f4tZC4gTdqHeQJ6s4mkzINy1aPmUrKZephwdFihwgG09hdwH-lEOUutRnYAebib-rf3LFEQDSdbXvJ_42VYKhzzcbsx3OP2EEo0GeNngebbTsZQ";

export default function Organization({ setCurrentOrg }) {
  const [organizations, setOganization] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((res) => {
        setOganization(res.data);
      });
  }, []);


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
