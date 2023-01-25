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
    return <p>{currBreed.name}</p>;
  });

  const animalTypeBtn = animalTypes.types.map((animalType, index) => {
    return (
      <li key={"type" + index}>
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
