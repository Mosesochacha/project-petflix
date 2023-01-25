import React, { useEffect, useState } from "react";
import "./App.css";
import HomepageLayout from "./component/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import AnimalTypes from "./component/animaltype/AnimalType";
import AnimalDetails from "./component/animaldetails/AnimalDetails";
import AnimalCategory from "./component/animalcategory/AnimalCategory";

function App() {
  const [animalTypes, setAnimalTypes] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [animalDetailCurrent, setanimalDetailCurrent] = useState({});
  const [type, setType] = useState("dog");
  const [currentBreeds, setCurrentBreeds] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchedResult, setSearchedResult] = useState([]);




  //   setSearchedResult(animals.filter((animal) =>
  //   animal.breeds.primary.toLowerCase().includes(searchValue.toLowerCase())
  // ))

  // curl -d "grant_type=client_credentials&client_id=TBUWjfxlzXKspuMgyLyTavDjNWaj0hrPRy1x3nFBACqlc6swLs&client_secret=n3x8Phb9OYqLL1rdWtaJFdtn3KUgAmUzYyauP9yz" https://api.petfinder.com/v2/oauth2/token

  const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUQlVXamZ4bHpYS3NwdU1neUx5VGF2RGpOV2FqMGhyUFJ5MXgzbkZCQUNxbGM2c3dMcyIsImp0aSI6ImRmYTgzYjU0M2Y5NzAxMzA3YjcxOTViNzBmOGNmYjRhYWQ4ZDlkZjQ2NDRmOWI3M2U2ZjU2YjRjYmYwMDc1MWFlMmUxOWVlMTQ3YjE0ODZhIiwiaWF0IjoxNjc0NjI1ODc2LCJuYmYiOjE2NzQ2MjU4NzYsImV4cCI6MTY3NDYyOTQ3Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.X-RZyTGk9Qi6VdB550v_cdvy-L890iL_GYrW8wpw4kFFzHmFesZm-wmOyji40I5JkKMOOfXRQOiNSfww8M3uMKtdEPs-EtTQMCk4_VhNr4pTsbUictJjBatpmz58atsWYAQG7S8XyAYkRqHeAgMbPAzq3kL5D1MJWQDyceJReTbtIKZC5JsjpLCdxWU3yN-NTO-f-n6naAT7gyU3aCX0_TL4TyNClGuBg6Gg2qQBQ7LlHJesAR9EyrJ6WxaBl-J6UHJVYg533S3R_bEOOsDYQM7PmDNG2J0MG-4QOfdD2-m__SIX9GNcPhRFHPn8xOBPbFEBuFygFcp6f8J6ivI-0Q"

  useEffect(() => {
    //Animals
    fetch(`https://api.petfinder.com/v2/animals?limit=100`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setAnimals(data);
      });

    fetch("https://api.petfinder.com/v2/types", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);

        setAnimalTypes(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.petfinder.com/v2/types/${type}/breeds`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCurrentBreeds(data);
        console.log(data.breeds);
      });
  }, [type]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomepageLayout />} />
          <Route
            exact
            path="/animals/"
            element={
              <AnimalTypes
                setType={setType}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                currentBreeds={currentBreeds}
                animals={animals}
                setanimalDetailCurrent={setanimalDetailCurrent}
              />
            }
          />
          <Route
            exact
            path="/animaldetail"
            element={
              <AnimalDetails animalDetailCurrent={animalDetailCurrent} />
            }
          />
          <Route
            path="/categories"
            element={
              <AnimalCategory
                animalTypes={animalTypes}
                setType={setType}
                currentBreeds={currentBreeds}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
