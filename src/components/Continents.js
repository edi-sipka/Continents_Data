/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../Redux/reducers';
import continents from '../list/list';
import { useParams } from 'react-router';
import './Continents.css';
function Continents() {
  const dispatch = useDispatch();
  const { idName } = useParams();
  const listOfCountries = useSelector((state) => state.countries);
  const countriesList = (name) => {
    dispatch(getList(name, idName));
  };
  return (
    <div>
      <div className="section">
        {continents.map(({ id, name, image }) => (
          <li key={id}>
            {name}
            <img src={image} />
            <button onClick={countriesList} type="button">
              Click here
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Continents;
