/* eslint-disable */

import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/store';
import Navbar from '../components/Navbar';

describe('Navbar rendering', () => {
  test('Navbar rendering', () => {
    const render = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    expect(render).toMatchSnapshot();
  });
});
