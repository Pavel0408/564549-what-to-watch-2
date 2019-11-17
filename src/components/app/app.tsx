import * as React from 'react';
import { MainScreen } from '../main-screen/main-screen';
import { IAppProps } from '../../interfaces';


export const App = ({ movieNames }: IAppProps): JSX.Element => (
  <MainScreen movieNames={ movieNames } />
);
