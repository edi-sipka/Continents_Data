import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { aboutCountries } from '../Redux/reducers';
import './Countries.css';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const handleClick = (name) => {
    dispatch(aboutCountries(name));
  };

  const [countryInfo, setCountryInfo] = useState('');

  const [search, setSearch] = useState('');

  const select = (e) => {
    setCountryInfo(e.target.value);
  };
  return (
    <div className="countries">
      <div className="f-box">
        <div className="text-field">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Country"
          />
          <FaSearch fontSize={10} className="search-icon" />
        </div>
        <select value={countryInfo} onChange={select} className="button">
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={uuidv4()} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>
      <ul className="row">
        {' '}
        <>
          {countries
            .filter((country) => {
              if (search === '' && countryInfo === '') {
                return country;
              }
              if (
                country.name.common
                  .toLowerCase()
                  .includes(search.toLowerCase())
                && country.name.common
                  .toLowerCase()
                  .includes(countryInfo.toLowerCase())
              ) {
                return country;
              }
              return country;
            })
            .map((country) => (
              <li key={country.name.common} className="lists">
                <div className="list">
                  <div className="icons">
                    <h2>{country.name.common}</h2>
                    <Link to={`/:/${country.name.common}`}>
                      <BsFillArrowRightCircleFill
                        className="btn"
                        onClick={() => handleClick(country.name.common)}
                      />
                    </Link>
                    <div className="image-position">
                      <img src={country.flags.png} alt="flag" />
                    </div>
                  </div>
                </div>

                <div className="item">
                  <p>Capital:</p>
                  <p>{country.capital}</p>
                </div>
                <div className="item">
                  <p>SubRegion:</p>
                  <p>{country.subregion}</p>
                </div>
                <div className="item">
                  <p>TimeZone:</p>
                  <p>{country.timezones[0]}</p>
                </div>
              </li>
            ))}
        </>
      </ul>
    </div>
  );
};

export default Countries;
