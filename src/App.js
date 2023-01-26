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
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJKUjdRcVJkQ1M2Y2FvbVQ3TURPRTlZQURJSkU1ZGVpbWg2UGVoeW00UUFPUnlvZkk5TSIsImp0aSI6IjM5NTRjZmQ1NTFiZmRmNmQ4MWU3YjAwYmNhNTU5YzEzNDk2YzhiZmJjMjdmNzU3OWM0N2FjNDVkMGQ4MTMxMTc4ZjBjZjEzNjRmZjZmZjExIiwiaWF0IjoxNjc0NzA1MjMzLCJuYmYiOjE2NzQ3MDUyMzMsImV4cCI6MTY3NDcwODgzMywic3ViIjoiIiwic2NvcGVzIjpbXX0.TsHjHNdPIw_g4oMH-Jj9KRPJSeNRa3wHRhgZQbaQdy5LRP1qn-yc8MPOeVEMM1mZNhCaqAnXbdrO4r1RbH08RbPYjPFPBIRIaKBfOvLsvF4ReoCX2bfY66OHG2_sK_Nl1oHgmrJt7gFQMjf3hNUSWxelFLikBMJ5mqVgyd42pm8lJPm7UFW4GI396ulS7nkqSj5o29VR3LnoR2uMz1veSrwBSTKa75RkFSDG2yfQt90XypeVZm15Vp4DHT_NPPB7QbwpfyOA6paVnMy18P5E5O-Y42LtnhVg1mDp_oOEG7DTumsM-fGqanWBnTsFIUf_g0ECNsBsUe61zAdPTPy5Pg"  
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
        <Route exact path='/register' element={< SignUp />}/>
        <Route exact path='/login' element={<LogIn/>}/>
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
