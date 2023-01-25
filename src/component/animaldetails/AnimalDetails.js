import React from "react";
import { Link } from "react-router-dom";

function AnimalDetails({ animalDetailCurrent }) {
//   console.log(animalDetailCurrent);
  return (
    <div>
      {/* <img src={animal.primary_photo_cropped.full} alt="animal"/> */}
      <h1>Name:{animalDetailCurrent.name}</h1>
      <h3>Breed: {animalDetailCurrent.breeds.primary}</h3>
      <h3>Age: {animalDetailCurrent.age}</h3>
      <p>
        Contact:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href={`mailto:${animalDetailCurrent.contact.email}`}
        >
          {" "}
          {animalDetailCurrent.contact.email}
        </a>
      </p>
      <h2>About {animalDetailCurrent.name}</h2>
      <p>{animalDetailCurrent.description}</p>
      <p>Species: {animalDetailCurrent.species}</p>
      <p>Status: {animalDetailCurrent.status}</p>
      <p>Gender: {animalDetailCurrent.gender}</p>

      <Link to="/animals">BACK</Link>
    </div>
  );
}

export default AnimalDetails;
