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
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUQlVXamZ4bHpYS3NwdU1neUx5VGF2RGpOV2FqMGhyUFJ5MXgzbkZCQUNxbGM2c3dMcyIsImp0aSI6IjBiMjcxZTBjMGVmYzg1ODg5ZWYyMmMyMTFjYWU3YmVjZmYxZjYxY2U0Yzg4YTU2MWQyNGZjMjhiZTg2YWQ5MWI2NTllOTcyNzg3ZWRiNjUxIiwiaWF0IjoxNjc0NzUwNzgxLCJuYmYiOjE2NzQ3NTA3ODEsImV4cCI6MTY3NDc1NDM4MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.q9RzjB5xyJHmuEZ5tzB-S-AjA2JB296EGLesl6_6QeGBTu5kpIee15kprAGcQZHu6wugO5qygQfQFoL1G8_Zierq900GqjY11oadeMtB1js0kF8vJR_fG6v12U_Mbq6QZPuCP6-aJFt0JwZfU4kCQuEf4gtChsmD1IzzUhsvV2Hk4YGYucwMkjah9NKzPSqUGjMoOt0viiBDO85vt6PgtLNMTTLwXZ5jJauv3aqa2T2UbhtwtaxtEIwjZfcn6QYaqznLxHlRbLumSudlf2MlXahB3tGSUJ2abwmIgPSvhyB4Htlmfn01GS9DXB8gQHtyY4PKzM7TRmcjmhwxrnh8GQ"  
  
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
        <Route exact path="/" element={<HomepageLayout />} />
        <Route exact path='/register' element={< SignUp />}/>
        <Route exact path='/login' element={<LogIn/>}/>
          <Route exact path="/orginfo" element={< AboutOrg currentOrg={currentOrg}/>} />
          <Route exact path="/organizations" element={< Organization setCurrentOrg={setCurrentOrg}/>} />

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
