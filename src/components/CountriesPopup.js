/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';

const CountriesPopup = () => {
  const { countries } = useSelector((state) => state);

  return (
    <div className="details">
      {countries.map((country) => (
        <li key={country?.name.common}>
          <div className="item">
            <p>The Official name: </p>
            <p>
              <strong>{country?.name.official}</strong>
            </p>
          </div>
          <div className="item">
            <p>The Population: </p>
            <p>
              <strong>{country?.population}</strong>
            </p>
          </div>
          <div className="item">
            <p>Capital Name: </p>
            <p>
              <strong>{country?.capital}</strong>
            </p>
          </div>
          <div className="item">
            <p>The languages they speak are:</p>
            <p>{Object.values(country?.languages)}</p>
          </div>
          <div className="item">
            <p>Coat Of Arms</p>
            <img src={country?.coatOfArms.svg} alt="awesome coat 0f arm" />
          </div>
        </li>
      ))}
    </div>
  );
};

export default CountriesPopup;
