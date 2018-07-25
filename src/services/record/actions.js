import {
    fetchRecord,
} from '../../utilities/fetch';

export const LOAD_RECORD = 'LOAD_RECORD';

export const loadRecord = record => ({
    type: LOAD_RECORD,
    payload: record,
})

export const retrieveRecord = recordID => (dispatch, getState) => {
    fetchRecord(recordID)
        .then(res => {
            dispatch(loadRecord(res))
        })
        .catch(err => {
            console.log(err);
        })
}