import {
    START_FETCH,
    FETCH_ERROR,
} from './actions';

const initialState = {
    isFetching: false,
    currentFetchID: null,
    fetchError: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case START_FETCH:
            return state;
        case FETCH_ERROR:
            return state;
        default:
            return state;
    }
};

export default reducer;