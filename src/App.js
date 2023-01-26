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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJKUjdRcVJkQ1M2Y2FvbVQ3TURPRTlZQURJSkU1ZGVpbWg2UGVoeW00UUFPUnlvZkk5TSIsImp0aSI6IjYxYzBkODc3ZDZhZTAzYzk4MzY5Njk4YTMxNTY5YTVlZTcwODViNWZiNmRhYzc2ZmJlMGFkOTljOTI2YWNmZGVlNTlkN2Q4MTQyYTE4ZGZjIiwiaWF0IjoxNjc0NzUwMTQ5LCJuYmYiOjE2NzQ3NTAxNDksImV4cCI6MTY3NDc1Mzc0OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.Al0QU9ghJArkROsn7gVopjwszp7Uc5YVeFXVrGDW2JTFdTTYWKHXTXiCrb_orV-IM4T1D6Ao6HJVYz_UBEvaGOqNFsPPnyWddOJzMYwN3W252PDrBeiECTgCRFLeEDaEajX_cZ9cZdDH4ODLIsp40p-ss47Qz-FLxO61M54EGp-ijsrVKTgJk9sA-uZEIQ4atjwMLrR2pMe46ikfWsA6gCkSHHPdfn7Xgft-ivY-2jLkEyOQuiXYksDEUV-S4Ir0aBeOjJzl32-fF-z3z-ozVWuTNlpMUu_Nqc67CzFyD3CTFYcTWS5jWWFzGjZSoXhZTSazpIfZ8fWROlPJwOpQcA";
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
