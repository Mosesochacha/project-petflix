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
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUQlVXamZ4bHpYS3NwdU1neUx5VGF2RGpOV2FqMGhyUFJ5MXgzbkZCQUNxbGM2c3dMcyIsImp0aSI6IjVmMTcyMjU4NDM0NDNjZjdkZjQ5NThjODkzZDAzZWJiZGE3ZTJhMjU0ODY1ZDViMmJhZDNiNTAxMDZjMGI0ODdkYzA1MWU2ZTJkZjA2MjViIiwiaWF0IjoxNjc0NzU0ODMxLCJuYmYiOjE2NzQ3NTQ4MzEsImV4cCI6MTY3NDc1ODQzMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.ycIJu1_ERoEsKTn6-OPWynWWUFRwxnNMtE68355R5fUsXVDs0EwwBmm55tdroK3cxT6ypCdq2mW1DZM9X3dpaHA-7NiyLOQyAKF34CxHjg43MNJKfvsefyvHcMFWqwasqn_jnBTJlu09BcvKxd0NLxFZ8kSt4CUm__6FXfbi5PUJaTfCcPoFgf3XCDH_Uc6SYUYCM206YmTteb328ufl5m6N0vYjgdkSGSFxkwSBAQl-mg2tzH4_0JNh5YVUrL5T3SCR94hhZ8vde4z7BDllOi9iH5nVDvuaIkgT8B7T4v6Fk_DVays1HB91hpBkP4fsVFTZpatlmmyTM01ElXTo9Q"  
  
  
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
