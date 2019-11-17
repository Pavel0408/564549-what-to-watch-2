import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { MainScreen } from './main-screen';


const moviesNames = [
  'Fantastic Beasts',
  'Bohemian Rhapsody',
  'Macbeth',
];

describe('testing Main Screen render', () => {
  it('Main Screen is render correctly', () => {
    const tree = TestRenderer.create(<MainScreen
      movieNames={ moviesNames }
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
