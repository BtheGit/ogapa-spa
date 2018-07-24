import axios from 'axios';
import queryString from 'query-string';

const BASE_RESOURCES_URL = 'http://ec2-18-207-9-100.compute-1.amazonaws.com:8010/v1/search?'
const DEFAULT_RESOURCES_PARAMS = { q: '', from: 0 };

// Stub for future validation
export const validateParams = params => {
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
    return executeFetchResources(url);
}

export const executeFetchResources = url => {
    return axios({
        url,
        method: 'get',
        timeout: 10000,
        responseType: 'json',
    })
};