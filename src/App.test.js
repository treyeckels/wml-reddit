import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('It renders the app without crashing', () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId('app')).toBeTruthy();
});
