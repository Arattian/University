import { showError } from './alertAction';
import { logOut } from './loginAction';

export const CUSTOM_API = 'https://university-server.herokuapp.com';
/* For local run */
// export const CUSTOM_API = 'http://localhost:3030';
export function fetchHelper(url, method, body) {
    if(body) {
        return fetch(url, {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({...body}),
        })
        .then(response => response.json())
    } else {
        return fetch(url, {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
        })
        .then(response => response.json())
    }
}

export function responseHelper(response, dispatch) {
    if (response.statusCode === 401) {
        dispatch(showError(response.message))
        dispatch(logOut());
        return false;
    } else if (response.statusCode === 403){
        dispatch(showError(response.message));
        return false;
    } else {
        return true;
    }
}