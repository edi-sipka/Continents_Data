/* eslint-disable */

import './App.css';
import React from 'react';
import MainPage from './MainPage/MainPage';
import Countries from './components/Countries';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MainPage/:idName" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
