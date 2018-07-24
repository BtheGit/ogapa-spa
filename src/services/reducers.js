import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import api from './api/reducer';
import form from './form/reducer';
import search from './search/reducer';

const reducers = combineReducers({
    api,
    form,
    search,
    router,
})

export default reducers;
