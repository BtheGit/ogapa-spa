import {
    LOAD_RECORD,
} from './actions';

const initialState = {}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_RECORD:
            return {
                ...action.payload
            };
        default:
            return state;
    }
}

export default reducer;