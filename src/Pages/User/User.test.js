import React from 'react';
import { render } from '@testing-library/react';
import User from './User';

test('It renders the User page without crashing', () => {
  const { queryByTestId } = render(<User location={{ pathName: 'FooBar' }} />);
  expect(queryByTestId('user')).toBeTruthy();
});
