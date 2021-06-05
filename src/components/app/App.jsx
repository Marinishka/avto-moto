import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {Routes} from '../../const.js';
import NotFound from '../not-found/not-found.jsx';
import Main from '../main/main.jsx';
import browserHistory from '../../browser-history.js';

const App = () => {
  return <BrowserRouter history={browserHistory}>
    <Switch>
      <Route path = {Routes.MAIN} render={() => {
        return <Main/>;
      }}/>
      <Route render={() => {
        return <NotFound/>;
      }}/>
    </Switch>
  </BrowserRouter>;
};

export default App;
