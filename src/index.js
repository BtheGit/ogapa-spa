import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';
import history from './history';
import { Provider } from 'react-redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore();

const App = () => (
    <ErrorBoundary>
        <Provider store={ store }>
            <AppRouter history={ history } />
        </Provider>
    </ErrorBoundary>
);

ReactDOM.render(<App />, document.getElementById('root'));
