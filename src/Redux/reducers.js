import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../api/api';

const FETCH_DATA = 'FETCH_DATA';
const COUNTRIES = 'COUNTRIES';
const initialState = [];

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA/fulfilled':
      return action.payload;
    case 'COUNTRIES':
      return state.filter((country) => country.name.common === action.payload);
    default:
      return state;
  }
};

export const allCountries = createAsyncThunk(FETCH_DATA, async () => {
  const response = await axios.get(api);
  return response.data.slice(0, 40).map((country) => country);
});

export const aboutCountries = (name) => ({ type: COUNTRIES, payload: name });

export default countryReducer;
