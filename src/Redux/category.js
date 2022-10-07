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

export const getCategory = (category) => ({
  type: GET_CATEGORY,
  payload: continents.filter((continent) => {
    if (continent.name === category) {
      return continent;
    }
    if (category === 'All') {
      return continents;
    }
    return false;
  }),
});

export default categoryReducer;
