import { Link } from "react-router-dom";
import InputArea from "./InputArea";
const Card = ({
  name,
  nativeName,
  population,
  capital,
  region,
  subRegion,
  flagImg,
  flagAlt,
  borders,
  currency,
  lang,
  domain,
  setActiveCountry,
}) => {
  const handleClick = () => {
    const country = {
      flagImg,
      flagAlt,
      name,
      nativeName,
      population,
      region,
      subRegion,
      capital,
      domain,
      currency,
      lang,
      borders,
    };
    setActiveCountry(country);
  };

  return (
    <div className="card" onClick={handleClick}>
      <Link to="/details">
        <img src={flagImg} alt={flagAlt} className="card-img rounded-t-md" />
        <div className="card-body p-6 pb-10">
          <h1 className="mb-4 text-lg font-extrabold">{name}</h1>
          <p className="text-sm mb-1">
            <b>Population: </b>
            {population}
          </p>
          <p className="text-sm mb-1">
            <b>Region: </b>
            {region}
          </p>
          <p className="text-sm mb-1">
            <b>Capital: </b>
            {capital}
          </p>
        </div>
      </Link>
    </div>
  );
};

const Countries = ({
  countriesArray,
  setCountriesArray,
  setActiveCountry,
  isLoading,
  setLoading,
}) => {
  if (isLoading) {
    return (
      <div>
        <InputArea
          setCountriesArray={setCountriesArray}
          setLoading={setLoading}
        />
        <div className="container flex justify-center">
          <h1 className="text-2xl font-semibold">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <InputArea
        setCountriesArray={setCountriesArray}
        setLoading={setLoading}
      />
      <div className="countries-container container grid md:grid-cols-2 lg:grid-cols-4 gap-16 justify-center items-center content-center">
        {countriesArray &&
          countriesArray.map((c) => {
            if (c.capital) {
              return (
                <Card
                  name={c.name.common}
                  population={c.population}
                  region={c.region}
                  subRegion={c.subregion}
                  capital={c.capital[0]}
                  flagImg={c.flags.png}
                  flagAlt={c.flags.alt}
                  nativeName={c.name.nativeName}
                  lang={c.languages}
                  currency={c.currencies}
                  domain={c.tld}
                  borders={c.borders}
                  setActiveCountry={setActiveCountry}
                  key={c.population}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default Countries;
