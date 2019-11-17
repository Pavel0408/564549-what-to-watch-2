import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/app/app';
import { moviesNames } from './mock/moviesNames';


const init = (): void => {
  ReactDOM.render(
    <App movieNames={ moviesNames } />,
    document.querySelector('#root'),
  );
};

init();
