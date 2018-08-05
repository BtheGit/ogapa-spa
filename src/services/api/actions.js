import { push } from 'react-router-redux';
import {
    validateParams,
    generateQueryString,
    fetchResources,
    fetchFullResources,
    fetchRecord,
} from '../../utilities/fetch';
import {
    loadSearchResults,
} from '../search/actions';
import {
    loadRecord,
} from '../record/actions';
import { convertMultipartToObject } from '../../utilities/fetch';

export const START_FETCH = 'START_FETCH';
export const END_FETCH = 'END_FETCH';
export const FETCH_ERROR = 'FETCH_ERROR';

export const startFetch = fetchId => ({
    type: START_FETCH,
    payload: fetchId,
});

export const endFetch = () => ({
    type: END_FETCH,
});

export const fetchError = (err) => ({
    type: FETCH_ERROR,
    payload: err
});

// This is a wrapper around the push action creator from the react-router-redux library
export const navigateToSearchPage = searchParams => {
    searchParams = validateParams(searchParams);
    const queryString = generateQueryString(searchParams);
    return push(`/search?${ queryString }`);
};

export const submitSearch = searchParams => async (dispatch, getState) => {
    try {
        const fetchId = Date.now();
        dispatch(startFetch(fetchId));
        const metadata = await fetchResources(searchParams);
        const resultIds = metadata.data.results.map(result => result.uri);
        if(resultIds.length){
            const multipartResults = await fetchFullResources(resultIds);
            const resultStrings = convertMultipartToObject(multipartResults.data);
            const results = resultStrings.map(result => JSON.parse(result));
            const normalized = {
                metadata: metadata.data,
                results,
            };
            if(getState().api.fetchId === fetchId){
                dispatch(loadSearchResults(normalized));
            }
        }
        else {
            const emptyResult = {
                metadata: metadata.data,
                results: [],
            };
            if(getState().api.fetchId === fetchId){
                dispatch(loadSearchResults(emptyResult));
            }
        }
    }
    catch(err){
        dispatch(fetchError(err));
    }
    finally{
        dispatch(endFetch());
    }
}

export const retrieveRecord = recordID => async (dispatch, getState) => {
    try {
        const fetchId = Date.now();
        dispatch(startFetch(fetchId));
        const record = await fetchRecord(recordID);
        const data = record.data;
        if(getState().api.fetchId === fetchId){
            dispatch(loadRecord(data));
        }
    }
    catch(err){
        dispatch(fetchError(err));
    }
    finally{
        dispatch(endFetch());
    }
}

