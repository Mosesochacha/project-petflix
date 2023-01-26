import React from "react";

function AnimalCategory({
  animalTypes,
  setType,
  currentBreeds,
  searchValue,
  setSearchValue,
}) {
  console.log(animalTypes);
  console.log(currentBreeds.breeds[0]);

  const showBreedLi = currentBreeds.breeds.map((currBreed , index) => {
    return (
      <div className="card  " id="Container" key={ currBreed + index}>
        <ul className=" Category " id="Category">
          <li className="list-group-item ">
            {currBreed.name}
          </li>
        </ul>
      </div>
    );
  });

  const animalTypeBtn = animalTypes.types.map((animalType, index) => {
    return (
      <ul key={"type" + index} className = "Toggle" >
        <p onClick={(e) => setType(e.target.innerText)}>
          {" "}
          {animalType.name}{" "}
        </p>
      </ul>
    );
  });

  return (
    <div key={animalTypes.index}>
      <div className="btn-group" id="Toggle" >
        <button type="button" className="btn btn-danger">
          Action
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
            <a className="dropdown-item" href="#">
              {animalTypeBtn}
            </a> 
          </li><hr/>
        </ul>
      </div>
      {showBreedLi}
    </div>
  );
}

export default AnimalCategory;
