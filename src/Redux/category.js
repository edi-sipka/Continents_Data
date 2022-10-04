/* eslint-disable */
/* import React from 'react';
import continents from '../list/list';

const CATEGORY = 'CATEGORY';

const categorySelector = (state = continents, action) => {
  switch (action.type) {
    case CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export const selectCategory = (category) => {
  return {
    type: CATEGORY,
    payload: continents.filter((continent) => {
      if (continent.name === category) {
        return continent;
      } else if (category === 'All') {
        return continents;
      }
    }),
  };
};

export default categorySelector;
*/
import continents from '../list/list';

const GET_CATEGORY = 'GET_CATEGORY';

const categoryReducer = (state = continents, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export const getCategory = (category) => {
  return {
    type: GET_CATEGORY,
    payload: continents.filter((continent) => {
      if (continent.name === category) {
        return continent;
      } else if (category === 'All') {
        return continents;
      }
    }),
  };
};

export default categoryReducer;
