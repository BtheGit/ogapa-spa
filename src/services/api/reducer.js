import {
    START_FETCH,
    FETCH_ERROR,
    END_FETCH,
} from './actions';

const initialState = {
    isFetching: false,
    currentFetchID: null,
    fetchError: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case START_FETCH:
            return {
                ...state,
                isFetching: true,
                fetchId: action.payload,
            }
        case END_FETCH:
            return {
                ...state,
                isFetching: false,
            }
        case FETCH_ERROR:
            return {
                ...state,
                fetchError: action.payload,
                isFetching: false,
            };
        default:
            return state;
    }
};

export default reducer;