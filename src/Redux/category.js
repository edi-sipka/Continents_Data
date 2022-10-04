/* eslint-disable */
import React from 'react';
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
    payload: continents.filter((value) => {
      if (value.name === category) {
        return value;
      } else if (category === 'All') {
        return continents;
      }
    }),
  };
};

export default categorySelector;
