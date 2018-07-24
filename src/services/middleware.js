import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import history from './history';

const middleware = composeWithDevTools(applyMiddleware(routerMiddleware(history)));

export default middleware;