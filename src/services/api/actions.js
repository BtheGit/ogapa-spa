import { push } from 'react-router-redux';
import {
    validateParams,
    generateQueryString,
} from '../../utilities/fetch';

export const START_FETCH = 'START_FETCH';
export const FETCH_ERROR = 'FETCH_ERROR';

export const startFetch = () => ({});
export const fetchError = () => ({});

// This is a wrapper around the push action creator from the react-router-redux library
export const submitSearch = searchParams => {
    searchParams = validateParams(searchParams);
    const queryString = generateQueryString(searchParams);
    return push(`/search?${ queryString }`);
};
