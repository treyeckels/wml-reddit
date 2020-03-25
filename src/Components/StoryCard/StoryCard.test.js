import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import StoryCard from './StoryCard';

test('It renders without crashing with good data', () => {
  const data = {
    title:
      'Widespread coronavirus testing in US is ‘weeks, if not months, out,’ says CEO of test manufacturer Roche',
    ups: 3629,
    media_embed: {},
    thumbnail:
      'https://b.thumbs.redditmedia.com/A0GlD4f4kHOJqkQdUsPJLaB42tX4uFWM-cmjV2p7BMs.jpg',
    created: 1585045881,
    id: 'fnx93e',
    author: 'demosthenesunlocked',
    permalink:
      '/r/Coronavirus/comments/fnx93e/widespread_coronavirus_testing_in_us_is_weeks_if/'
  };
  const { queryByTestId } = render(
    <Router>
      <StoryCard data={data} />
    </Router>
  );
  expect(queryByTestId('story-card')).toBeTruthy();
  expect(queryByTestId('story-card-header')).toBeTruthy();
  expect(queryByTestId('story-card-content')).toBeTruthy();
  expect(queryByTestId('story-card-thumbnail')).toBeTruthy();
});

test('It does not try to render an image when there is no thumbnail', () => {
  const data = {
    permalink:
      '/r/Coronavirus/comments/fnx93e/widespread_coronavirus_testing_in_us_is_weeks_if/'
  };
  const { queryByTestId } = render(
    <Router>
      <StoryCard data={data} />
    </Router>
  );
  expect(queryByTestId('story-card-thumbnail')).toBeFalsy();
});

test('It does not fail when media embed is undefined', () => {
  const data = {
    permalink:
      '/r/Coronavirus/comments/fnx93e/widespread_coronavirus_testing_in_us_is_weeks_if/'
  };
  const { queryByTestId } = render(
    <Router>
      <StoryCard data={data} />
    </Router>
  );
  expect(queryByTestId('story-card')).toBeTruthy();
});

test('It generates a correct Tweet id when there is a tweet media embed', () => {
  const data = {
    media_embed: {
      content:
        '&lt;blockquote class="twitter-video"&gt;&lt;p lang="en" dir="ltr"&gt;US may have 10 times more coronavirus cases than reported, says professor &lt;a href="https://t.co/Y6njMM289r"&gt;https://t.co/Y6njMM289r&lt;/a&gt;&lt;/p&gt;&amp;mdash; The Independent (@Independent) &lt;a href="https://twitter.com/Independent/status/1242457603210457089?ref_src=twsrc%5Etfw"&gt;March 24, 2020&lt;/a&gt;&lt;/blockquote&gt;&lt;script async src="https://platform.twitter.com/widgets.js" charset="utf-8"&gt;&lt;/script&gt;'
    },
    permalink:
      '/r/Coronavirus/comments/fnx93e/widespread_coronavirus_testing_in_us_is_weeks_if/'
  };
  const { queryByTestId } = render(
    <Router>
      <StoryCard data={data} />
    </Router>
  );
  expect(queryByTestId('1242457603210457089')).toBeTruthy();
});
