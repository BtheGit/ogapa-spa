import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './services/store';
import AppRouter from './AppRouter';
import history from './services/history';
import ErrorBoundary from './components/error/ErrorBoundary';

const App = () => (
    <ErrorBoundary>
        <Provider store={ store }>
            <AppRouter history={ history } />
        </Provider>
    </ErrorBoundary>
);

ReactDOM.render(<App />, document.getElementById('root'));
