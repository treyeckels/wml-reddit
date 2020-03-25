import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Comment from './Comment';

test('It renders without crashing', () => {
  const comment = {
    data: {
      author: 'Foo',
      content: 'Foo Bar Baz'
    }
  };
  const { queryByTestId } = render(
    <Router>
      <Comment comment={comment} />
    </Router>
  );
  expect(queryByTestId('comment')).toBeTruthy();
});

test('It renders author correctly when there is no author but there is content', () => {
  const comment = {
    data: {
      content: `<p data-author="foobar">markup</p>`
    }
  };
  const { getByText } = render(
    <Router>
      <Comment comment={comment} />
    </Router>
  );
  const author = getByText(/foobar/i);
  expect(author).toBeInTheDocument();
});
