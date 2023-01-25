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
  const [searchType, setSearchType] = useState("breed");

  // curl -d "grant_type=client_credentials&client_id=TBUWjfxlzXKspuMgyLyTavDjNWaj0hrPRy1x3nFBACqlc6swLs&client_secret=n3x8Phb9OYqLL1rdWtaJFdtn3KUgAmUzYyauP9yz" https://api.petfinder.com/v2/oauth2/token

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUQlVXamZ4bHpYS3NwdU1neUx5VGF2RGpOV2FqMGhyUFJ5MXgzbkZCQUNxbGM2c3dMcyIsImp0aSI6IjE0NDFiNzhkNDJiM2U5NDEzODNhMDEyZDhiMjVhN2M1MzcyNDg4ODU5ZDg0NDNjOGQ3NzljNzE0OTQ3OGNhYTg1N2RkYTM0NjgzMWZjYTExIiwiaWF0IjoxNjc0NjMwMzU5LCJuYmYiOjE2NzQ2MzAzNTksImV4cCI6MTY3NDYzMzk1OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.dwuNNsqaLmsFAuc3h9yG8_rEvV_D2EIYYcfUk-dXQB8tPK3QP76zHh0L59fZGmwmJmdiWstHGTcuoRvKBT3BTseF9lKthFRBJWETHI-Ag1GHgFEEabl9S_nPhL1fLWeCnBsoj9Xs6sloEpWwqpNWY3RwMECScB5Lt0c6iZaKywsqlqGNoODQT9-u3YWNK5wkN3F9StuAlEemRvCWHiXtubPuwRSEY2p-e5PKnMfV8cCYVU8BPHOu1_Xu6R0SDY2vgEE82t_CEyQk4DzFxpzPU_2wHCG0OLXKAMGNuGzcBQ2FzG1saB4nojqiCA3lfvlZyrb7570pNb-v5IhwJpWByg";
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
                setSearchType={setSearchType}
                searchType={searchType}
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
