/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../Redux/reducers';
import continents from '../list/list';
import { useParams } from 'react-router';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Continents.css';
function Continents() {
  const dispatch = useDispatch();
  const { idName } = useParams();
  const listOfCountries = useSelector((state) => state.countries);
  const countriesList = (name) => {
    dispatch(getList(name));
  };
  return (
    <div>
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
