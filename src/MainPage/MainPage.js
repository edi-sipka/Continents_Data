import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { allCountries } from '../Redux/reducers';
import Continents from '../components/Continents';
import world from '../Image/Continents.svg';
import './MainPage.css';

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCountries());
  }, []);
  return (
    <div className="main">
      <h2 className="h2">Continents Data</h2>

      <img src={world} alt="world" />

      <h2>All Continents</h2>
      <Continents />
    </div>
  );
}

export default MainPage;
