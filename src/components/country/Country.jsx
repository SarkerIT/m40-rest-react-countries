import { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;

  const [isVisited, setIsVisited] = useState(false);

  const handleIsVisited = () => {
    setIsVisited(!isVisited);
  };

  return (
    <div className={`country ${isVisited && "visited"}`}>
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
      <h4>Population: {population}</h4>
      <h3>Area: {area}</h3>
      <h4>Code: {cca3}</h4>
      <button onClick={handleIsVisited}>Visited? Click to mark</button>
      {isVisited && "  I have VIsited this country."}
    </div>
  );
};

export default Country;
