/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { aboutCountries } from '../Redux/reducers';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const handleClick = (name) => {
    dispatch(aboutCountries(name));
  };

  return (
    <div className="countries">
      <ul className="row">
        {' '}
        <>
          {countries.map((country) => (
            <li key={country?.name.common}>
              <div className="list">
                <h2>{country?.name.common}</h2>
                <Link to={`/:/${country?.name.common}`}>
                  <BsFillArrowRightCircleFill
                    onClick={() => handleClick(country?.name.common)}
                  />
                </Link>
              </div>
              <img src={country?.flags.png} alt="flag" />
              <div className="item">
                <p>Capital:</p>
                <p>{country?.capital}</p>
              </div>
              <div className="item">
                <p>SubRegion:</p>
                <p>{country?.subregion}</p>
              </div>
              <div className="item">
                <p>TimeZone:</p>
                <p>{country?.timezones[0]}</p>
              </div>
            </li>
          ))}
        </>
      </ul>
    </div>
  );
};

export default Countries;
