import React, { useEffect, useState } from "react";
import "./App.css";
import HomepageLayout from "./component/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import AnimalTypes from "./component/animaltype/AnimalType";
import AnimalDetails from "./component/animaldetails/AnimalDetails";
import AnimalCategory from "./component/animalcategory/AnimalCategory";
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

  // curl -d "grant_type=client_credentials&client_id=TBUWjfxlzXKspuMgyLyTavDjNWaj0hrPRy1x3nFBACqlc6swLs&client_secret=n3x8Phb9OYqLL1rdWtaJFdtn3KUgAmUzYyauP9yz" https://api.petfinder.com/v2/oauth2/token

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUQlVXamZ4bHpYS3NwdU1neUx5VGF2RGpOV2FqMGhyUFJ5MXgzbkZCQUNxbGM2c3dMcyIsImp0aSI6ImJkMjlkYzE0MDMzNDJiMDVjZjUzZWU1M2RiZWZhNjY2ODhhNjIyNzZhYzZmNTdjNTA1NGFjZGE4YzlmZTE1MWYyZDcwZDhhMDI3NWMxMzdmIiwiaWF0IjoxNjc0NjM5MDg5LCJuYmYiOjE2NzQ2MzkwODksImV4cCI6MTY3NDY0MjY4OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.liQA9wBT72IvujOmctSOHwBuh4WbBEVANG8eUT8DdyLOzg6Vz7BSo3Dl8rltJ5elwQeRaaLkqZdy1H5qGiICsWWuvceYweTqX8ZSY-Z_67lxRGh1r0jsvRKlhPmCjqBTpQBqeeVv5ONWQwo6XZt0T7mgMP4V_LHqW2NEKZMw-h4zw8RyEqP9ZvnPdSKBk8wL1CgwmeDTyHg2HvR-0YFIilTcqeRNrJ--Mk8CiaQ__xtd26YBqJwjuYByjupj2j5DOzQ4XyB3aZ0Rc_pOXCfbQ5y28xi8TzNawW8JTFRSFbpy2z3MSXB9_WGEl-dmSaxvrDCcLw4gfWv5iqri7SaIyg"  
  
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
        <Route exact path='/register' element={< SignUp />}/>


        <Route exact path='/' element={<LogIn/>}/>

          <Route exact path="/home" element={<HomepageLayout />} />
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
