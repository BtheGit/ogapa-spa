import {
    LOAD_SEARCH_RESULTS,
    CLEAR_SEARCH_RESULTS,
} from './actions';

const initialState = {}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_SEARCH_RESULTS:
            return {
                ...action.payload
            };
        case CLEAR_SEARCH_RESULTS:
            return state;
        default:
            return state;
    }
};

export default reducer;