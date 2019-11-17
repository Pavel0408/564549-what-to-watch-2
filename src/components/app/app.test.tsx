import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { App } from './app';


const moviesNames = [
  'Fantastic Beasts',
  'Bohemian Rhapsody',
  'Macbeth',
];

describe('testing App render', () => {
  it('App is render correctly', () => {
    const tree = TestRenderer.create(<App
      movieNames={ moviesNames }
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
