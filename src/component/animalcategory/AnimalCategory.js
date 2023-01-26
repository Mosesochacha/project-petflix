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

  const showBreedLi = currentBreeds.breeds.map((currBreed) => {
    return (
      <div className="card  " id="Container">
        <ul className=" Category " id="Category">
          <li className="list-group-item " bg-warning>
            {currBreed.name}
          </li>
        </ul>
      </div>
    );
  });

  const animalTypeBtn = animalTypes.types.map((animalType, index) => {
    return (
      <ul key={"type" + index} className = "Toggle">
        <p onClick={(e) => setType(e.target.innerText)}>
          {" "}
          {animalType.name}{" "}
        </p>
      </ul>
    );
  });

  return (
    <div>
      <div class="btn-group" id="Toggle">
        <button type="button" class="btn btn-danger">
          Action
        </button>
        <button
          type="button"
          class="btn btn-danger dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
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
