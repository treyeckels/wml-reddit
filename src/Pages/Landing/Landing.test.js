import React from 'react';
import { render } from '@testing-library/react';
import Landing from './Landing';

test('It renders the Landing page without crashing', () => {
  const { queryByTestId } = render(
    <Landing location={{ pathName: 'FooBar' }} />
  );
  expect(queryByTestId('landing')).toBeTruthy();
});
