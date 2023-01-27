import React from "react";
import "./AnimalType.css";
import { Link } from "react-router-dom";
import SearchForm from "../search/SearchForm";

function AnimalTypes({
  animals,
  setanimalDetailCurrent,
  setSearchValue,
  searchValue,
  setSearchType,
  searchType,
}) {
  let filteredAnimals;

  if (searchType === "breed") {
    filteredAnimals = animals.animals.filter((animale) =>
      animale.breeds.primary.toLowerCase().includes(searchValue.toLowerCase())
    );
  } else {
    filteredAnimals = animals.animals.filter((animale) =>
      animale.type.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const animalsCard = filteredAnimals.map((animal, index) => {
    const imageChecker = () => {
      if (animal.primary_photo_cropped) {
        return <img src={animal.primary_photo_cropped.small} alt="animal" />;
      } else {
        return <p className="unfortunate">No Image</p>;
      }
    };

    return (
      <li className="animalCardLi" key={"animal" + index}>
        {imageChecker()}

        <h3 className="restInLi">{animal.name}</h3>
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
      <SearchForm
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchType={searchType}
        setSearchType={setSearchType}
      />
      <ul className="animalCardUl">{animalsCard}</ul>
    </div>
  );
}

export default AnimalTypes;
