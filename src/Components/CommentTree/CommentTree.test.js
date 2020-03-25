import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import axiosMock from 'axios';
import CommentTree from './CommentTree';

jest.mock('axios');

test('It renders without crashing', () => {
  const data = [
    {
      data: {
        ups: 40,
        id: 'fldo0e1',
        author: 'winterbird',
        parent_id: 't3_fo78n6',
        body:
          'Can we swap governors? Florida offers you DeShittis, three alligators of your choice, and one complementary airboat ride.',
        permalink:
          '/r/Coronavirus/comments/fo78n6/governor_cuomo_my_mother_is_not_expendable_your/fldo0e1/'
      }
    }
  ];
  const { queryByTestId } = render(
    <Router>
      <CommentTree data={data} />
    </Router>
  );
  expect(queryByTestId('comment-tree')).toBeTruthy();
  expect(queryByTestId('comment-tree-more-button')).toBeFalsy();
});

test('It renders the more button when the comment is more and not a real comment', () => {
  const data = [
    {
      kind: 'more',
      data: {
        count: 1483
      }
    }
  ];
  const { queryByTestId } = render(
    <Router>
      <CommentTree data={data} />
    </Router>
  );
  expect(queryByTestId('comment-tree-more-button')).toBeTruthy();
});

test('It renders the more button when the comment is more and not a real comment', async () => {
  const data = [
    {
      kind: 'more',
      data: {
        count: 1483,
        children: [1, 2, 3]
      }
    }
  ];

  const { queryByTestId } = render(
    <Router>
      <CommentTree data={data} />
    </Router>
  );

  axiosMock.get.mockResolvedValueOnce({
    data: {
      data: {
        json: {
          data: {
            things: [
              {
                data: {
                  parent: 't1_flei62w',
                  contentText: `Well, it's 8% of reported cases, the true number is probably closer to 0.8%. Of course, Italy is testing more than the US, so the real numbers are very blurry.`,
                  id: 'id'
                }
              }
            ]
          }
        }
      }
    }
  });

  // Button should exist at this point
  expect(queryByTestId('comment-tree-more-button')).toBeTruthy();
  fireEvent.click(queryByTestId('comment-tree-more-button'));
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  // Button should not exist anymore.
  expect(queryByTestId('comment-tree-more-button')).toBeFalsy();
});
