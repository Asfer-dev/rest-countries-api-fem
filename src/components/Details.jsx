import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Details = ({ activeCountry, setActiveCountry, darkMode, setLoading }) => {
  const {
    flagImg,
    flagAlt,
    name,
    nativeName,
    population,
    region,
    subRegion,
    capital,
    domain,
    currencies,
    lang,
    borders,
  } = activeCountry;

  const handleClick = (code) => {
    setLoading(true);
    const fields =
      "languages,capital,name,flags,population,region,subregion,tld,currencies,languages,borders";
    const url = "https://restcountries.com/v3.1/alpha/";
    axios.get(url + code + "?fields=" + fields).then((response) => {
      const data = response.data;
      console.log(data);
      const country = {
        name: data.name.common,
        population: data.population,
        region: data.region,
        subRegion: data.subregion,
        capital: data.capital[0],
        flagImg: data.flags.png,
        flagAlt: data.flags.alt,
        nativeName: data.name.nativeName.eng,
        lang: data.languages,
        currency: data.currencies,
        domain: data.tld[0],
        borders: data.borders,
      };
      setActiveCountry(country);
      setLoading(false);
    });
  };

  return (
    <div className="details-page container">
      <Link to="/">
        <button className=" my-12 bg-white dark:bg-elements-dark px-6 py-2 font-semibold rounded-md shadow-md">
          {darkMode ? (
            <FontAwesomeIcon icon={faArrowLeftLong} style={{ color: "#fff" }} />
          ) : (
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              style={{ color: "hsl(200, 15%, 8%)" }}
            />
          )}
          <span className="ml-4">Back</span>
        </button>
      </Link>
      <div className="details-container flex flex-col justify-start md:flex-row">
        <img src={flagImg} alt={flagAlt} className="mb-6 h-full" />
        <div className="details w-full md:mx-48">
          <h1 className="text-3xl mb-6 font-bold">{name}</h1>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-6">
              <p>
                <b>Native Name: </b>
                {name}
              </p>
              <p>
                <b>Population: </b>
                {population}
              </p>
              <p>
                <b>Region: </b>
                {region}
              </p>
              <p>
                <b>Sub Region: </b>
                {subRegion}
              </p>
              <p>
                <b>Capital: </b>
                {capital}
              </p>
            </div>
            <div className="mb-6">
              <p>
                <b>Top Level Domain: </b>
                {domain}
              </p>
              <p>
                <b>Currencies: </b>
                {currencies}
              </p>
              <p>
                <b>Languages: </b>
                {console.log(lang)}
              </p>
            </div>
          </div>
          <h2 className="font-bold">Border Countries:</h2>
          <div className="border-wrapper">
            {borders.map((border) => (
              <button
                onClick={() => handleClick(border)}
                className="py-1 px-4 mr-4 mt-2 bg-white dark:bg-elements-dark font-semibold rounded-md shadow-sm"
                key={border}
              >
                {border}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
