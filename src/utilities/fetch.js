import axios from 'axios';
import queryString from 'query-string';

const BASE_RESOURCES_URL = 'http://ec2-18-207-9-100.compute-1.amazonaws.com:8010/v1/search?'

// Stub for future validation
export const validateParams = params => {
    return generateResourcesQueryString(params);
}

export const generateQueryString = (params, defaultParams = {}) => {
    const fullParams = { ...defaultParams, ...params };
    return queryString.stringify(fullParams);
}

export const fetchResources = params => {
    const DEFAULT_PARAMS = { q: '', from: 0 };
    const validatedParams = validateParams(params);
    const queryString = generateQueryString(validatedParams, DEFAULT_PARAMS);
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