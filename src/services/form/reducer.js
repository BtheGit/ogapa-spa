import {
    UPDATE_FORM_FIELD,
    CLEAR_FORM,
} from './actions';

const initialState = {
    searchbar: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_FORM_FIELD:
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            };
        case CLEAR_FORM:
            return state;
        default:
            return state;
    }
};

export default reducer;