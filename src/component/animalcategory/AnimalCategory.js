import React from "react";

function AnimalCategory({
  animalTypes,
  setType,
  currentBreeds,
  searchValue,
  setSearchValue,
}) {
  // console.log(animalTypes);
  // console.log(currentBreeds.breeds[0]);

  const showBreedLi = currentBreeds.breeds.map((currBreed) => {
    return (
      <div>
        <div className="container mt-4" >
          <ul className="list-group">
            <li className="list-group-item">{currBreed.name}</li>
          </ul>
        </div>
      </div>
    );
  });

  const animalTypeBtn = animalTypes.types.map((animalType, index) => {
    return (
      <li key={"type" + index} id= "Cat">
        <button onClick={(e) => setType(e.target.innerText)}>
          {" "}
          {animalType.name}{" "}
        </button>
      </li>
    );
  });

  return (
    <div>
      <ul className="animalTypeUl">{animalTypeBtn}</ul>
      {showBreedLi}
    </div>
  );
}

export default AnimalCategory;
