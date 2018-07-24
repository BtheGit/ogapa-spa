export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
export const CLEAR_FORM = 'CLEAR_FORM';

export const updateFormField = (field, value) => ({
    type: UPDATE_FORM_FIELD,
    payload: {
        field,
        value,
    }
});
export const clearForm = () => ({});