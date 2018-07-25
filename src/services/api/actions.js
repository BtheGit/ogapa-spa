import { push } from 'react-router-redux';
import {
    validateParams,
    generateQueryString,
    fetchResources,
} from '../../utilities/fetch';
import {
    loadSearchResults,
} from '../search/actions';

export const START_FETCH = 'START_FETCH';
export const FETCH_ERROR = 'FETCH_ERROR';

export const startFetch = () => ({});
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

export const submitSearch = searchParams => (dispatch, getState) => {
    fetchResources(searchParams)
        .then(results => dispatch(loadSearchResults(results)))
        .catch(err => dispatch(fetchError(err)))
}
