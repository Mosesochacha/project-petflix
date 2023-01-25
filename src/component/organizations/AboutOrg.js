import React from "react";
import { Link } from "react-router-dom";




function AboutOrg({currentOrg}){
   
     console.log(currentOrg._links);

return(
<div className="card" style={{width : "18rem"}} key ={currentOrg.id}>
    <div className="card-body bg-warning" key= {currentOrg.id}>
        <h5 className="card-title"> NAME :{currentOrg.name}</h5>
         <p className="card-text"> description :{currentOrg.mission_statement}</p>
        {/* <p className="card-text">{currentOrg.address}</p> */}
        <p className="card-text">Phone number :{currentOrg.phone}</p>
        <p className="card-text">Email : {currentOrg.email}</p>
        <p className="card-text">url: {currentOrg.url}</p>
        <p className="card-text"> href: {currentOrg.website}</p>
        <p className="card-text"> City :{currentOrg.address.city}</p>
        <p className="card-text"> Country :{currentOrg.address.country}</p>
        <p className="card-text"> PostCode:{currentOrg.address.postcode}</p>
        <p className="card-text"> animal :{currentOrg._links.animals.href}</p>
        <p className="card-text">{currentOrg._links.self.href}</p>

        <Link to="/organizations">BACK</Link>

    </div>
</div>
)
   
    
}

export default AboutOrg 
