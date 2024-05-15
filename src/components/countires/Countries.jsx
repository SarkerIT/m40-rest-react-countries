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

  const [visitedCountries, setIsVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log(country);
    console.log(`add to visited list`, { country });
    const newVisitedCountries = [...visitedCountries, country];
    setIsVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <h2>Total Countries: {countries.length}</h2>
      <hr />
      <div className="visited-countries">
        <h3>My total visited countries: {visitedCountries.length}</h3>
      </div>

      {visitedCountries.map((country) => (
        <div>
          <li key={country.cca3}>{country.name.common}</li>
        </div>
      ))}
      <hr />
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
