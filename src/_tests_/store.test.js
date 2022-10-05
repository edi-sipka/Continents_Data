/* eslint-disable */
import store from '../Redux/store';

it('render store', () => {
  expect(store.getState().countries).toEqual([]);
});
