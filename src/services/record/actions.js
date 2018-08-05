export const LOAD_RECORD = 'LOAD_RECORD';

export const loadRecord = record => ({
    type: LOAD_RECORD,
    payload: record,
})