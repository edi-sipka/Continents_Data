/* eslint-disable */

import './App.css';
import React from 'react';
import MainPage from './MainPage/MainPage';
import Countries from './components/Countries';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesPopup from './components/CountriesPopup';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:name" element={<Countries />} />
        <Route path="/:name/:id" element={<CountriesPopup />} />
      </Routes>
    </div>
  );
}

export default App;
