/* eslint-disable */

import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import countryReducers from './reducers';
import thunk from 'redux-thunk';
import categorySelector from './category';

const rootReducer = combineReducers({
  countries: countryReducers,
  category: categorySelector,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
export default store;
