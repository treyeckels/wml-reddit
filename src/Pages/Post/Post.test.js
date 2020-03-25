import React from 'react';
import { render } from '@testing-library/react';
import Post from './Post';

test('It renders the Post page without crashing', () => {
  const { queryByTestId } = render(<Post location={{ pathName: 'FooBar' }} />);
  expect(queryByTestId('post')).toBeTruthy();
});
