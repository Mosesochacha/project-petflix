import React from "react";
import "../homepage.css";

function AnimalCategory({
  animalTypes,
  setType,
  currentBreeds,
  searchValue,
  setSearchValue,
}) {
  const showBreedLi = currentBreeds.map((currBreed, index) => {
    return (
      <div className="card  " id="Container" key={currBreed + index}>
        <ul className=" Category " id="Category">
          <li className="list-group-item ">{currBreed.name}</li>
        </ul>
      </div>
    );
  });

  const animalTypeBtn = animalTypes.map((animalType, index) => {
    return (
      <ul key={"type" + index} className="Toggle">
        <p onClick={(e) => setType(e.target.innerText)}> {animalType.name} </p>
      </ul>
    );
  });

  return (
    <div className="allBreeds ">
      <div key={animalTypes.index}>
        <div className="btn-group fine" id="Toggle">
          <button type="button" className="btn btn-danger">
            TYPE
          </button>
          <button
            type="button"
            className="btn btn-danger dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item">{animalTypeBtn}</button>
            </li>
            <hr />
          </ul>
        </div>
        {showBreedLi}
      </div>
    </div>
  );
}

export default AnimalCategory;
