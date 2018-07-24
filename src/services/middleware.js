import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';

const middleware = composeWithDevTools(
    applyMiddleware(
        routerMiddleware
    )
);

export default middleware;