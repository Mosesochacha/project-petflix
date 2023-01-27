import React from "react";
import { Link } from "react-router-dom";
import "../homepage.css";

function AboutOrg({ currentOrg }) {
  console.log(currentOrg._links);

  return (
    <div className="eachOrg">
      <div className="About" style={{ width: "40rem" }} key={currentOrg.id}>
        <div className="" key={currentOrg.id}>
          <p className=""> NAME :{currentOrg.name}</p>
          <p>Description : {currentOrg.mission_statement}</p>
          <p className="">Phone number :{currentOrg.phone}</p>
          <p className="">
            Email :
            <a
              target="_blank"
              rel="noreferrer"
              href={`mailto:${currentOrg.email}`}
            >
              {" "}
              {currentOrg.email}
            </a>
          </p>
          <a target="_blank" rel="noreferrer" href={currentOrg.url}></a>
          <p className=""> City :{currentOrg.address.city}</p>
          <p className=""> Country :{currentOrg.address.country}</p>
          <p className=""> PostCode:{currentOrg.address.postcode}</p>
          <a target="_blank" rel="noreferrer" href={currentOrg.url}>
            Get more
          </a>
          <br /> <hr />
          <Link to="/organizations">BACK</Link>
        </div>
      </div>
    </div>
  );
}

export default AboutOrg;
