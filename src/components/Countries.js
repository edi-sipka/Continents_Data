import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { aboutCountries } from '../Redux/reducers';
import './Countries.css';

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
            <li key={country?.name.common} className="lists">
              <div className="list">
                <div className="icons">
                  <h2>{country?.name.common}</h2>
                  <Link to={`/:/${country?.name.common}`}>
                    <BsFillArrowRightCircleFill
                      className="btn"
                      onClick={() => handleClick(country?.name.common)}
                    />
                  </Link>
                  <div className="image-position">
                    <img src={country?.flags.png} alt="flag" />
                  </div>
                </div>
              </div>

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
