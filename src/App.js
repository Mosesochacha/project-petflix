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

<<<<<<< HEAD
=======
  // curl -d "grant_type=client_credentials&client_id=JR7QqRdCS6caomT7MDOE9YADIJE5deimh6Pehym4QAORyofI9M&client_secret=cDYMVWV8rJw6BAb2hLoqXmbTZPk5vLkmX2IKyEvU" https://api.petfinder.com/v2/oauth2/token

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJUQlVXamZ4bHpYS3NwdU1neUx5VGF2RGpOV2FqMGhyUFJ5MXgzbkZCQUNxbGM2c3dMcyIsImp0aSI6IjIxNzY3OTEzNWQ1ZDllODg0NDFmMDIyOGJkNjY5MTNkYzUyZDFhNzNlYTc0MjU5MmU0MGU0YzRkZTQ1YWU3MmQyY2IzY2JkNDY2NmZiYmI3IiwiaWF0IjoxNjc0ODAyOTA4LCJuYmYiOjE2NzQ4MDI5MDgsImV4cCI6MTY3NDgwNjUwOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.Bpw2WNdG-lAn7hwXBMtUm1iH4ZtyIPDCNZcVV8EHvNpqdQIsCaOKhprYyIYY7rkf1fvfD929KdrqEB9X032lr-0B46CXxhNkm0Pgqtg0hlXVO6cQJnW8J_Rk3fJhwekHjxHQYdTdY5eTeFEd3AyWmGOvYhcNGsQVwMFPi1mK2wTKclAI8rBy2jXlZYTGjWi4qE875UleMTgGqofVI08vLMLPFFYyfKji_JS48kcwONyRWuTZt3fkLlP_p7EzuQaz37VXUxJ9AhIh_XbkCzRywYvAjD6J-h4Im__6wH7AqjQYo04dDVv8V2wUZGjzy7tlYAmXrn8qZyAcemD2zqLEEQ"

>>>>>>> 526d28f0e1eed1e6b6c1c50f11fcb464037ebcc4
  useEffect(() => {
    fetch(`https://api-petfinder-com.vercel.app/animals`)
      .then((resp) => resp.json())
      .then((data) => {
        setAnimals(data);
      });

    fetch("https://https-api-petfinder-com-v2.vercel.app/types")
      .then((resp) => resp.json())
      .then((data) => {
        setAnimalTypes(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://https-api-petfinder-com-v2-breeds.vercel.app/${type}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCurrentBreeds(data);
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
