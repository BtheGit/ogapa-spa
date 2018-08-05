import axios from 'axios';
import queryString from 'query-string';
// import mockdata from './mockdata.js';

// const BASE_URL = 'http://ec2-18-207-9-100.compute-1.amazonaws.com:8010';
const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://ec2-18-207-9-100.compute-1.amazonaws.com:8010/v1'; // With CORS Proxy
// const BASE_URL = 'http://localhost:8080/http://ec2-18-207-9-100.compute-1.amazonaws.com:8010/v1'; // With CORS Proxy
const BASE_RESOURCES_URL = BASE_URL + '/search?';
const BASE_RECORD_URL = BASE_URL + '/documents?uri=';
const DEFAULT_RESOURCES_PARAMS = { q: '', start: 1, format: 'json', pageLength: 20 };

// For parsing multipart objects
export const BOUNDARY_FLAG = 'BOUNDARY';

// Stub for future validation
export const validateParams = params => {
    if(typeof params === 'string'){
        params = queryString.parse(params);
    }
    return params;
}

export const generateQueryString = (params, defaultParams = DEFAULT_RESOURCES_PARAMS) => {
    const fullParams = { ...defaultParams, ...params };
    if(fullParams.q && typeof fullParams.q === 'string'){
        const text = fullParams.q;
        const lowerCase = text.toLowerCase();
        fullParams.q = lowerCase;
    }
    const stringified = queryString.stringify(fullParams);
    return stringified;
}

export const convertMultipartToObject = blob => {
    const partsWithMetaData = blob.split(BOUNDARY_FLAG)
    const partsWithoutHeaders = partsWithMetaData.reduce((acc, curr) => {
        const startIndex = curr.indexOf('{');
        const endIndex = curr.lastIndexOf('}');
        if(startIndex === -1 || endIndex === -1){
            // No valid JSON found
            return acc;
        }
        const jsonString = curr.substr(startIndex, (endIndex - startIndex) + 1);
        return [ ...acc, jsonString ];
    }, [])
    return partsWithoutHeaders;
}

// AJAX METHODS
export const fetchResources = params => {
    const validatedParams = validateParams(params);
    const queryString = generateQueryString(validatedParams);
    const url = BASE_RESOURCES_URL + queryString;
    return axios({
        url,
        method: 'get',
        responseType: 'json',
        headers: {
            // Origin: '',
            "Access-Control-Allow-Origin": 'cors',
            Authorization: `Basic ${ process.env.REACT_APP_API_KEY }`,
            "Cache-Control": "no-cache"            
        }
    })
}

export const fetchFullResources = ids => {
    const uris = ids.join('&uri=');
    const url = `${ BASE_RECORD_URL }${ uris }`;
    return axios({
        url,
        method: 'get',
        headers: {
            Accept: `multipart/mixed; boundary=${ BOUNDARY_FLAG }`,
            "Access-Control-Allow-Origin": 'cors',
            Authorization: `Basic ${ process.env.REACT_APP_API_KEY }`,
            "Cache-Control": "no-cache"            
        }
    })
}

export const fetchRecord = recordID => {
    const url = BASE_RECORD_URL + recordID;
    // return mockRecordFetch();
    return axios({
        url,
        method: 'get',
        responseType: 'json',
        headers: {
            // Origin: '',
            "Access-Control-Allow-Origin": 'cors',
            Authorization: "Basic YWRtaW46aS0wM2QzODYxZDA2ZTI2ZGE0ZA==",
            "Cache-Control": "no-cache"            
        }
    })
}

// const mockRecordFetch = () => {
//     return Promise.resolve(mockdata.record);
// }