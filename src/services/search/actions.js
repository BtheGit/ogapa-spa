export const LOAD_SEARCH_RESULTS = 'LOAD_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

export const loadSearchResults = results => ({
    type: LOAD_SEARCH_RESULTS,
    payload: results
});
export const clearSearchResults = () => ({});