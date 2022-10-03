/* eslint-disable */

import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import countryReducers from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  countries: countryReducers,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
export default store;
