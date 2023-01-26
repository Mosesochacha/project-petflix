import React from "react";
import { Link } from "react-router-dom";

function AboutOrg({ currentOrg }) {
  console.log(currentOrg._links);

  return (
    <div className="card" style={{ width: "30rem" }} key={currentOrg.id}>
      <div className="card-body" key={currentOrg.id}>
        <p className="card-title"> NAME :{currentOrg.name}</p>
        <p className="card-text">
          {" "}
          Description : {currentOrg.mission_statement}
        </p>
        <p className="card-text">Phone number :{currentOrg.phone}</p>
        <p className="card-text">Email : {currentOrg.email}</p>
        <p className="card-text"> City :{currentOrg.address.city}</p>
        <p className="card-text"> Country :{currentOrg.address.country}</p>
        <p className="card-text"> PostCode:{currentOrg.address.postcode}</p>
        <a target="_blank" rel="noreferrer" href={currentOrg.url}>
          Get more
        </a>{" "}
        <br />
        <Link to="/organizations">BACK</Link>
      </div>
    </div>
  );
}

export default AboutOrg;
