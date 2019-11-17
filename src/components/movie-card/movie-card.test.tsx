import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { MovieCard } from './movie-card';


const moviesNames = [
  'Fantastic Beasts',
  'Bohemian Rhapsody',
  'Macbeth',
];

describe('testing Movie Card render', () => {
  it('Movie Card is render correctly', () => {
    const tree = TestRenderer.create(<MovieCard
      title={ moviesNames[0] }
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
