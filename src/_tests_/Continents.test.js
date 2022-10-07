/* eslint-disable */

import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/store';
import Continents from '../components/Continents';

describe('Navbar rendering', () => {
  test('Navbar rendering', () => {
    const render = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Continents />
        </BrowserRouter>
      </Provider>
    );
    expect(render).toMatchSnapshot();
  });
});
