import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, population, area, cca3 } = country;

  const [isVisited, setIsVisited] = useState(false);
  const handleIsVisited = () => {
    setIsVisited(!isVisited);
  };

  // const passWithParams = () => {
  //   handleVisitedCountries(country);
  // };

  return (
    <div className={`country ${isVisited && "visited"}`}>
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
      <h4>Population: {population}</h4>
      <h3>Area: {area}</h3>
      <h4>Code: {cca3}</h4>
      {/* <button onClick={passWithParams}>Mark Visited </button> */}
      <button onClick={() => handleVisitedCountries(country)}>
        Mark Visited{" "}
      </button>
      <button onClick={handleIsVisited}>Wanna go?</button>
      {isVisited && "  I wanna vIsit this country."}
    </div>
  );
};

export default Country;
