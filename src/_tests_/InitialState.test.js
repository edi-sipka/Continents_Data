/* eslint-disable */

import Countries from '../Redux/reducers';
describe('countries reducer', () => {
  it('should return the initial state', () => {
    expect(Countries(undefined, {})).toEqual([]);
  });
});
