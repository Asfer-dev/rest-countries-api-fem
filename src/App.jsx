import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Details from "./components/Details";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [countriesArray, setCountriesArray] = useState([]);

  const [activeCountry, setActiveCountry] = useState({
    flagImg: "",
    flagAlt: "",
    name: "",
    nativeName: "",
    population: "",
    region: "",
    subRegion: "",
    capital: "",
    domain: "",
    currency: {},
    lang: {},
    borders: [],
  });

  const fields =
    "languages,capital,name,flags,population,region,subregion,tld,currencies,languages,borders";

  useEffect(() => {
    axios
      .get(
        `https://restcountries.com/v3.1/independent?status=true&fields=${fields}`
      )
      .then((response) => {
        const data = response.data;
        setCountriesArray(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="app">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route
          path="/"
          element={
            <Countries
              countriesArray={countriesArray}
              setCountriesArray={setCountriesArray}
              setActiveCountry={setActiveCountry}
            />
          }
        />
        <Route
          path="/details"
          element={
            <Details
              activeCountry={activeCountry}
              setActiveCountry={setActiveCountry}
              darkMode={darkMode}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
