/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../Redux/reducers';
import continents from '../list/list';
import { useParams } from 'react-router';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Continents.css';
import { selectCategory } from '../Redux/category';
function Continents() {
  const dispatch = useDispatch();
  const { idName } = useParams();
  const listOfCountries = useSelector((state) => state.countries);
  const countriesList = (name) => {
    dispatch(getList(name));
  };
  const categoryList = (e) => {
    dispatch(selectCategory(e.target.value));
  };
  return (
    <div>
      <label htmlFor="category">
        <select
          type="text"
          value="Select Continent"
          onChange={categoryList}
          placeholder="Category"
          name="category"
        >
          <option value="Select Continent">SELECT CONTINENT</option>
          <option value="All">ALL</option>
          <option value="Africa">AFRICA</option>
          <option value="Asia">ASIA</option>
          <option value="Antarctic">ANTARCTICA</option>

          <option value="Europe">EUROPE</option>
          <option value="Oceania">OCEANIA</option>

          <option value="North America">NORTH AMERICA</option>
          <option value="South America">SOUTH AMERICA</option>
        </select>
      </label>
      <div className="section">
        {continents.map(({ id, name, image }) => (
          <li key={id}>
            <Link to={`${name}`}>{name}</Link>
            <img src={image} />
            <button onClick={() => countriesList(name)} type="button">
              <BsFillArrowRightCircleFill />
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Continents;
