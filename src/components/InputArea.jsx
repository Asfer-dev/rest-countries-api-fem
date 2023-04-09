import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const InputArea = ({ setCountriesArray, setLoading, darkMode }) => {
  const [inputName, setInputName] = useState("");

  const [regFilter, setRegFilter] = useState("");

  const fields =
    "languages,capital,name,flags,population,region,subregion,tld,currencies,languages,borders";

  useEffect(() => {
    setLoading(true);
    let url;
    if (regFilter !== "")
      url = `https://restcountries.com/v3.1/region/${regFilter}`;
    else
      url = `https://restcountries.com/v3.1/independent?status=true&fields=${fields}`;

    axios
      .get(url)
      .then(async (response) => {
        await setCountriesArray(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [regFilter]);

  const handleChange = (e) => {
    setLoading(true);
    setInputName(e.target.value);
    let url;
    if (e.target.value.length > 1) {
      url = `https://restcountries.com/v3.1/name/${e.target.value}`;
    } else {
      url = `https://restcountries.com/v3.1/independent?status=true&fields=${fields}`;
    }

    axios
      .get(url)
      .then(async (response) => {
        await setCountriesArray(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <form className="container my-10 flex flex-col md:items-center md:flex-row space-y-4">
      <div className=" w-full md:w-5/12 relative">
        <label className="absolute top-1/4 left-4" htmlFor="search">
          {darkMode ? (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#fff" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#858585" }}
            />
          )}
        </label>
        <input
          className="shadow-default rounded-md w-full h-full outline-none p-4 pl-12 text-input dark:bg-elements-dark dark:text-white"
          type="text"
          name=""
          placeholder="Search for a country..."
          onChange={handleChange}
          value={inputName}
          id="search"
        />
      </div>
      <select
        onChange={(e) => setRegFilter(e.target.value)}
        className="w-48 md:ml-auto p-4 shadow-default rounded-md font-medium dark:bg-elements-dark"
      >
        <option value="">Filter By Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
};

export default InputArea;
