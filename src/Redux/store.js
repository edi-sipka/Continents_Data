import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import countryReducers from './reducers';
import categorySelector from './category';

const rootReducer = combineReducers({
  countries: countryReducers,
  category: categorySelector,
});

const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
