import React from "react";
import { Link } from "react-router-dom";

function AnimalDetails({ animalDetailCurrent }) {
  const imageChecker = () => {
    if (animalDetailCurrent.primary_photo_cropped) {
      return (
        <img
          src={animalDetailCurrent.primary_photo_cropped.small}
          alt="animal"
        />
      );
    } else {
      return <p>No Image</p>;
    }
  };

  //   console.log(animalDetailCurrent);
  return (
    <div className="card"   id="Details">

      {imageChecker()}
      <h1 style={{"margin-botom":"0"}}>Name:{animalDetailCurrent.name}</h1>
      <h3 style={{"margin":"0" , "padding-top":"0"}}>Breed: {animalDetailCurrent.breeds.primary}</h3>
      <h3   style={{"margin":"0" , "padding-top":"0"}}>Age: {animalDetailCurrent.age}</h3>
      <p   style={{"margin":"0" , "padding-top":"0"}}>
        Contact:{" "}
        <a   style={{"margin":"0" , "padding-top":"0"}}
          target="_blank"
          rel="noreferrer"
          href={`mailto:${animalDetailCurrent.contact.email}`}
        >
          {" "}
          {animalDetailCurrent.contact.email}
        </a>
      </p>
      <h2 className="about"  style={{"margin":"0" , "padding-top":"0"}}>About {animalDetailCurrent.name}</h2>
      <p style={{"margin":"0" , "padding-top":"0"}}>{animalDetailCurrent.description}</p>
      <p style={{"margin":"0" , "padding-top":"0"}}>Species: {animalDetailCurrent.species}</p>
      <p style={{"margin":"0" , "padding-top":"0"}}>Status: {animalDetailCurrent.status}</p>
      <p style={{"margin":"0" , "padding-top":"0"}}>Gender: {animalDetailCurrent.gender}</p>

      <Link to="/animals" style={{"margin":"0" , "padding-top":"0"}}>BACK</Link>
         
    </div>
  );
}


export default AnimalDetails;
