import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../Redux/category';
import { allCountries } from '../Redux/reducers';
import './Continents.css';

const Continents = () => {
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const fetch = (name) => {
    dispatch(allCountries(name));
  };
  const getList = (e) => {
    dispatch(getCategory(e.target.value));
  };

  return (
    <div className="section">
      <label htmlFor="category">
        <select
          type="text"
          value="Select Continent"
          onChange={getList}
          placeholder="Category"
          name="category"
          className="button"
        >
          <option value="Select Continent">SELECT YOUR CONTINENT</option>
          <option value="All">SHOW ALL</option>
          <option value="Africa">AFRICA</option>
          <option value="Asia">ASIA</option>
          <option value="Antarctica">ANTARCTICA</option>
          <option value="Europe">EUROPE</option>
          <option value="Oceania">OCEANIA</option>

          <option value="North America">NORTH AMERICA</option>
          <option value="South America">SOUTH AMERICA</option>
        </select>
      </label>
      <ul className="list">
        {categories.map(({ id, name, image }) => (
          <li key={id} className="lists">
            <img src={image} alt="countries" />
            <div className="position">
              <h2 className="title-name">{name}</h2>
              <Link to={`/${name}`}>
                <BsFillArrowRightSquareFill
                  className="btn"
                  onClick={() => fetch(name)}
                />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Continents;
