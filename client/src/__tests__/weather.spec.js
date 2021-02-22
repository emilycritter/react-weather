import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Weather from '../components/Weather';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders search form', () => {
  act(() => {
    render(<Weather />, container);
  });
  expect(container.textContent).toContain('Enter City or Zip');
});

it('renders results card with animated gif on initial load', () => {
  act(() => {
    render(<Weather />, container);
  });
  expect(container.innerHTML).toContain('Animated icon of different weather');
});
