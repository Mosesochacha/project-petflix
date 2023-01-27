import React from "react";
import { NavLink } from "react-router-dom";
import "../homepage.css";

function AnimalDetails({ animalDetailCurrent }) {
  const imageChecker = () => {
    if (animalDetailCurrent.primary_photo_cropped) {
      return (
        <img
          className="imgDetail"
          src={animalDetailCurrent.primary_photo_cropped.small}
          alt="animal"
        />
      );
    } else {
      return <p className="imgDetail">No Image</p>;
    }
  };

  //   console.log(animalDetailCurrent);
  return (
    <div className="cardDetails" id="Details">
      {imageChecker()}
      <p>
        <b>Name:</b>
        {animalDetailCurrent.name} <b>Breed:</b>{" "}
        {animalDetailCurrent.breeds.primary} <b>Age:</b>{" "}
        {animalDetailCurrent.age}
      </p>
      <p>
        <b>Species:</b> {animalDetailCurrent.species} <b>Status:</b>{" "}
        {animalDetailCurrent.status} <b>Gender:</b> {animalDetailCurrent.gender}
      </p>

      <p>
        <b>Contact: </b>
        <a
          style={{ textDecoration: "none", color: "blue" }}
          target="_blank"
          rel="noreferrer"
          href={`mailto:${animalDetailCurrent.contact.email}`}
        >
          {" "}
          {animalDetailCurrent.contact.email}
        </a>
      </p>

      <p></p>
      <p></p>
      <p>
        <b>About:</b> {animalDetailCurrent.name}
      </p>
      <p>{animalDetailCurrent.description}</p>

      <NavLink
        className="linkerBack"
        to="/animals"
        style={{ margin: "0", paddingTop: "0" }}
      >
        BACK
      </NavLink>
    </div>
  );
}

export default AnimalDetails;
