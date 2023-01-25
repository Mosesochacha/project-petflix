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

function App() {
  const [animalTypes, setAnimalTypes] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [animalDetailCurrent, setanimalDetailCurrent] = useState({});
  const [type, setType] = useState("dog");
  const [currentBreeds, setCurrentBreeds] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchedResult, setSearchedResult] = useState([]);
  const [currentOrg, setCurrentOrg] = useState([]);



  //   setSearchedResult(animals.filter((animal) =>
  //   animal.breeds.primary.toLowerCase().includes(searchValue.toLowerCase())
  // ))

  // curl -d "grant_type=client_credentials&client_id=JR7QqRdCS6caomT7MDOE9YADIJE5deimh6Pehym4QAORyofI9M&client_secret=cDYMVWV8rJw6BAb2hLoqXmbTZPk5vLkmX2IKyEvU" https://api.petfinder.com/v2/oauth2/token

  const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJKUjdRcVJkQ1M2Y2FvbVQ3TURPRTlZQURJSkU1ZGVpbWg2UGVoeW00UUFPUnlvZkk5TSIsImp0aSI6ImIxNjQyMzY1YTZkMjEyNzc4NjliZmIzNjI0M2FmOWUwYTYyYTIyZmU3MjBkM2UzODRjMmY3NWM2ODBmZWYzMTFhMGI2ZWZmYzMxYjI5M2ZmIiwiaWF0IjoxNjc0NjYxODExLCJuYmYiOjE2NzQ2NjE4MTEsImV4cCI6MTY3NDY2NTQxMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.DSCxLed82p6Xq4h6vGxO8Pmj2Vr52WenGrI-MHes6Ft6i5EOr9cpvzUuQYQ5G6j8EHBKs3KUiLCEvcCnOQZeGrRIeTgZRQb_I2vDlFYheXIVACNX5fHJjt9v83YQPlyMrMcfXUb_bGnafChJ5BoJtPHEMGRYtBD47OQyq_vm-ulAiu_8wJvm2CNhY4qXJry6JD0JbBB2X939FuUOw1U6WFX1x-qfoUn1O_Lgn_IxTcn_NUSNjS2exYblMNtVRWn2WuFYt31uBoQ8U6RXnmF-LmjXRx-FsDqlWi3BZ-lAd_z5Q0MjsC2XAH4ZbWOf6yYsC_k4UDrzsjP0PtDCdGof8w"
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
          <Route exact path="/orginfo" element={< AboutOrg currentOrg={currentOrg}/>} />
          <Route exact path="/organizations" element={< Organization setCurrentOrg={setCurrentOrg}/>} />
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
