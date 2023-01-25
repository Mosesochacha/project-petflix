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
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJKUjdRcVJkQ1M2Y2FvbVQ3TURPRTlZQURJSkU1ZGVpbWg2UGVoeW00UUFPUnlvZkk5TSIsImp0aSI6IjQ4YmM1MWM5NDQ1YmE2NWE2YzcwMzVkYjcwNGRmY2MxYmNiNjc0MTBiOGU5NTI2NmYyYzQ3ZGY5NmIzNmRjNmNjYTJiMGFkMGE3NzM0MzI2IiwiaWF0IjoxNjc0NjQ3NDYxLCJuYmYiOjE2NzQ2NDc0NjEsImV4cCI6MTY3NDY1MTA2MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.ZG-cx_ZSv3GH4zY71J5pdxh184Cel8rZeDBV7jjpWRYdhnnRTY4j99xHzjaYY9wUDdK5Vj0ITiqFWVoMMvgwwPS3u3tGDXknDVQJXdf1RdXrs8JpbXHnftXiqmnvu0_K35lmAS_liH5Ku6iTyC_n_ZHo1pTeiORQjQDse_7LebGWxyBYnBL0ufxnLcar0GeaMM8EDYy3VQhrn5oXH8VdlHij8KMCJJIiraiwLg6yb5NXnX2adGIq57_Cs-My1OOaZTPgwxW-lPJ-oej0Kb4X92FLApRo8wr-Xhuw2HXa_9v9GEldTF1F0RLeRz7R3hh07Gy3rfqW16hJ7ebH__bLTA"
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
