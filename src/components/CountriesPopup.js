/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import './CountriesPopup.css';

const CountriesPopup = () => {
  const { countries } = useSelector((state) => state);

  return (
    <div className="details">
      {countries.map((country) => (
        <li key={country?.name.common} className="list-style">
          <div className="emblem">
            <p>National Emblem</p>
            <img src={country?.coatOfArms.svg} alt="national emblem" />
          </div>
          <div className="listing">
            <p>The Official name: </p>
            <p>
              <strong>{country?.name.official}</strong>
            </p>
          </div>
          <div className="listing">
            <p>The Population: </p>
            <p>
              <strong>{country?.population}</strong>
            </p>
          </div>
          <div className="listing">
            <p>Capital Name: </p>
            <p>
              <strong>{country?.capital}</strong>
            </p>
          </div>
          <div className="listing">
            <p>Official Language:</p>
            <p>{Object.values(country?.languages)}</p>
          </div>
        </li>
      ))}
    </div>
  );
};

export default CountriesPopup;
