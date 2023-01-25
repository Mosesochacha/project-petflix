import React from "react";
import "./AnimalType.css";
import { Link } from "react-router-dom";
// import SearchForm from "../search/SearchForm";

function AnimalTypes({
  animals,
  setanimalDetailCurrent,
  setSearchValue,
  searchValue,
}) {
  const animalsCard = animals.animals.map((animal, index) => {
    // animal.photos.map(photo => {
    //     console.log(photo)

    //     // photo.map(size => {
    //     //     console.log(size)
    //     // })
    // })

    const imageChecker = () => {
      if (animal.primary_photo_cropped) {
        return <img src={animal.primary_photo_cropped.small} alt="animal" />;
      } else {
        return <p>No Image</p>;
      }
    };

    return (
      <li className="animalCardLi" key={"animal" + index}>
        {imageChecker()}

        {/* <img src={animal.primary_photo_cropped.small} alt="animal"/> */}
        <h3>{animal.name}</h3>
        <h5>{animal.species}</h5>
        <Link
          to="/animaldetail"
          onClick={() => {
            setanimalDetailCurrent({ ...animal });
          }}
        >
          {" "}
          Details
        </Link>
      </li>
    );
  });

  return (
    <div className="animalDiv">
      {/* <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} /> */}
      <ul className="animalCardUl">{animalsCard}</ul>
    </div>
  );
}

export default AnimalTypes;
