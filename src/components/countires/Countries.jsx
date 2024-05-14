import { useState } from "react";
import { useEffect } from "react";
import Country from "../country/Country";
import "./Countries.css";

// shortcut for a component rsc + tab

const Countries = () => {
  // declare the state
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // data from restcountries.com
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>Total Countries: {countries.length}</h2>

      <h3>Visited countries: </h3>
      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3} country={country}>
            {" "}
          </Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
