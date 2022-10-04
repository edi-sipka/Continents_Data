/* eslint-disable */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allCountries } from '../Redux/reducers';
import Continents from '../components/Continents';
import world from '../Image/Continents.svg';
import './MainPage.css';
import Countries from '../components/Countries';

function MainPage() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(allCountries());
  }, []);
  return (
    <div className="main">
      <h2 className="h2">Continents Data</h2>

      <img src={world} />

      <Continents />
    </div>
  );
}

export default MainPage;
