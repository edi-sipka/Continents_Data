/* eslint-disable */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../api/api';

const initialState = [];
const FETCH_DATA = 'FETCH_DATA';
const GET_LIST = 'GET_LIST';

const countryReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA/fulfilled':
      return action.payload;
    case 'GET_DATA/fulfilled':
      return action.payload;
    default:
      return state;
  }
};

export const fetchCountries = createAsyncThunk(FETCH_DATA, async (name) => {
  const response = await axios.get(api);
  return response.data.filter((country) => country.region === name);
});
export const getList = createAsyncThunk(GET_LIST, async (name) => {
  const response = await axios.get(api);
  return response.data.filter((country) => country.name.common == name);
});
export default countryReducers;
