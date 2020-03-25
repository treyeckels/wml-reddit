import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import orange from '@material-ui/core/colors/orange';
import SortBar from './SortBar';

test('It renders without crashing', () => {
  const { queryByTestId } = render(<SortBar />);
  expect(queryByTestId('sort-bar')).toBeTruthy();
  expect(queryByTestId('sort-bar-hot')).toBeTruthy();
  expect(queryByTestId('sort-bar-new')).toBeTruthy();
  expect(queryByTestId('sort-bar-controversial')).toBeTruthy();
  expect(queryByTestId('sort-bar-top')).toBeTruthy();
  expect(queryByTestId('sort-bar-rising')).toBeTruthy();
});

test('It should handle ClickEvents', () => {
  const logSpy = jest.spyOn(console, 'log');
  const { queryByTestId } = render(
    <SortBar handleSortByChange={console.log} />
  );
  fireEvent.click(queryByTestId('sort-bar-hot'));
  fireEvent.click(queryByTestId('sort-bar-new'));
  fireEvent.click(queryByTestId('sort-bar-controversial'));
  fireEvent.click(queryByTestId('sort-bar-top'));
  fireEvent.click(queryByTestId('sort-bar-rising'));
  expect(logSpy).toHaveBeenCalledTimes(5);
});

// test('It should assign active style color to active icon', () => {
//   const { queryByTestId } = render(<SortBar sortBy="hot" />);
//   expect(queryByTestId('sort-bar-hot')).toHaveStyle(`color: ${orange[900]};`);
// });
