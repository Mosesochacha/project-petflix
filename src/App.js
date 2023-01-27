import React, { useEffect, useState } from "react";
import "./App.css";
import HomepageLayout from "./component/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import AnimalTypes from "./component/animaltype/AnimalType";
import AnimalDetails from "./component/animaldetails/AnimalDetails";
import AnimalCategory from "./component/animalcategory/AnimalCategory";
import Organization from "./component/organizations/organization";
import AboutOrg from "./component/organizations/AboutOrg";
import LogIn from "./component/login/login";
import SignUp from "./component/signup/SignUp";

function App() {
  const [animalTypes, setAnimalTypes] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [animalDetailCurrent, setanimalDetailCurrent] = useState({});
  const [type, setType] = useState("dog");
  const [currentBreeds, setCurrentBreeds] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("breed");
  const [currentOrg, setCurrentOrg] = useState([]);

  // curl -d "grant_type=client_credentials&client_id=JR7QqRdCS6caomT7MDOE9YADIJE5deimh6Pehym4QAORyofI9M&client_secret=cDYMVWV8rJw6BAb2hLoqXmbTZPk5vLkmX2IKyEvU" https://api.petfinder.com/v2/oauth2/token

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUQlVXamZ4bHpYS3NwdU1neUx5VGF2RGpOV2FqMGhyUFJ5MXgzbkZCQUNxbGM2c3dMcyIsImp0aSI6IjM3ZjMwZjFhZDY4MDIzNTAwNjNjZDQ4YzViNjNiZjE1ZTZjZDE5ZGE2NGVjOTdjZTJjNjQ0MjYyYmM5YzAyZmE1NzBkZGUzMmFiZGFjY2EyIiwiaWF0IjoxNjc0Nzg3OTg4LCJuYmYiOjE2NzQ3ODc5ODgsImV4cCI6MTY3NDc5MTU4OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.twoJcz9kD91TTsy7FYBpPacV897KZuheiXopv9oY2cwnH1Z50pvFl2Stc0GdsZwVdfSEV4mdTuo0IDED0bPipmSiTrPju3QNZjNV_FkBkwb6251IKzWMrgFLYrLFF1f97m-Rnyv0Rx3PZ-I6kdP5-YzP9XKGbWNqBLbMMOnfP1IkaiuVV7dNCjbenqbFkqlIkmWHjiiOMuamrYHkAavHAULGjkUnRFn1t7YsWoZrpWbwsBGuRYjSvk679SGBV6AGtFLx9-Gz1G0lDonLq_npHNJAqMAn3UxwCc5vBDL0cF_UxaUDt9GzJjHb84o76vYFxZHkHDxEKbSOhyDA3pl-6w";

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
        // console.log(data.breeds);
      });
  }, [type]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/register" element={<SignUp />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route
            exact
            path="/orginfo"
            element={<AboutOrg currentOrg={currentOrg} />}
          />
          <Route
            exact
            path="/organizations"
            element={<Organization setCurrentOrg={setCurrentOrg} />}
          />
          <Route exact path="/" element={<HomepageLayout />} />
          <Route
            exact
            path="/animals"
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
                key={animalTypes.index}
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
