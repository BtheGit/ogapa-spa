import React from 'react';
import { ConnectedRouter as Router } from 'react-router-redux';
import {
    Switch,
    Route
} from 'react-router-dom';
import SearchPage from './views/search_page/SearchPage';

const AppRouter = ({ history }) => (
  <Router history={ history }>
    <Switch>
        <Route exact path="*" component={ SearchPage } />
    </Switch>
  </Router>
)

export default AppRouter;
