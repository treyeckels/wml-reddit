import React from 'react';
import { render } from '@testing-library/react';
import RailCard from './RailCard';

test('It renders without crashing', () => {
  const { queryByTestId } = render(<RailCard />);
  expect(queryByTestId('rail-card')).toBeTruthy();
});
