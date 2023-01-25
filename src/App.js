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

  // curl -d "grant_type=client_credentials&client_id=TBUWjfxlzXKspuMgyLyTavDjNWaj0hrPRy1x3nFBACqlc6swLs&client_secret=n3x8Phb9OYqLL1rdWtaJFdtn3KUgAmUzYyauP9yz" https://api.petfinder.com/v2/oauth2/token

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUQlVXamZ4bHpYS3NwdU1neUx5VGF2RGpOV2FqMGhyUFJ5MXgzbkZCQUNxbGM2c3dMcyIsImp0aSI6IjMzZGYyNzE2YmFjYjQ2Yjg5ZGNhZjIyMWZjNDIzYzlkNmEzY2UzZDIxMzVmZTBiZDA2MmQwZWYyNWVjNzk0OThmY2FkY2U0YjRjYjEzZmYzIiwiaWF0IjoxNjc0NjIxNTE4LCJuYmYiOjE2NzQ2MjE1MTgsImV4cCI6MTY3NDYyNTExOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.sZLur45BqR5mwMfHJfR30cjaghtF0oSgdXXslJef72tjUqNmGD4siYPOAU1HGniPaDtAE1COJIGXfMxIfpu1XsqKi_MghjHKt_O6h-ky8yuqm80SAP_lRiFhZ5Sno4RgkiPGwGWKldi_1A6gLYUKXh9D_V4cwjlgXwZlXg9xgUkyGav_v56VfoKB_MC8xIotaW8RvN1_kY0MO7m6dyr-944UgK1cK8YOyWkThAenDPHCS95VbdCYyL2WugaOMZQazkMqofIRZsZ-B8I_M5LeYUIRcFyCad6h_m0HjN9WtWeGOUM_KUWgC7OUQhQZv9S8eNrOWsHU9s-P-Gj_8yBPFA";


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
        // console.log(data);
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
