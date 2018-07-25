import axios from 'axios';
import queryString from 'query-string';
import mockdata from './mockdata.json';

const BASE_URL = 'http://ec2-18-207-9-100.compute-1.amazonaws.com:8010';
const BASE_RESOURCES_URL = BASE_URL + '/v1/search?';
const BASE_RECORD_URL = BASE_URL + '/v1/documents?uri=';
const DEFAULT_RESOURCES_PARAMS = { q: '', from: 0 };

// Stub for future validation
export const validateParams = params => {
    if(typeof params === 'string'){
        params = queryString.parse(params);
    }
    return params;
}

export const generateQueryString = (params, defaultParams = DEFAULT_RESOURCES_PARAMS) => {
    const fullParams = { ...defaultParams, ...params };
    return queryString.stringify(fullParams);
}

export const fetchResources = params => {
    const validatedParams = validateParams(params);
    const queryString = generateQueryString(validatedParams);
    const url = BASE_RESOURCES_URL + queryString;
    console.log(url)
    // return executeFetch(url);
    return mockResourcesFetch();
}

export const fetchRecord = recordID => {
    const url = BASE_RECORD_URL + recordID;
    // return executeFetch(url);
    return mockRecordFetch();
}

export const executeFetch = url => {
    return axios({
        url,
        method: 'get',
        timeout: 10000,
        responseType: 'json',
    })
};

const mockResourcesFetch = () => {
    return Promise.resolve(mockdata);
}

const mockRecordFetch = () => {
    return Promise.resolve(mockdata.results[0]);
}