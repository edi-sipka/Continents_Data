/* eslint-disable */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../Redux/reducers';
import Continents from '../components/Continents';
import world from '../Image/Continents.svg';
import './MainPage.css';

function MainPage() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  return (
    <div className="main">
      <h2>Continents Data</h2>
      <img src={world} />

      <Continents />
    </div>
  );
}

export default MainPage;
