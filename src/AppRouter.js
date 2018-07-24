import React from 'react';
import { ConnectedRouter as Router } from 'react-router-redux';
import {
    Switch,
    Route
} from 'react-router-dom';
import SearchPage from './views/search_page/SearchPage';
import HomePage from './views/home_page/HomePage';

const AppRouter = ({ history }) => (
  <Router history={ history }>
    <Switch>
        <Route exact path="/search" component={ SearchPage } />
        <Route path="*" component={ HomePage } /> 
    </Switch>
  </Router>
)

export default AppRouter;
