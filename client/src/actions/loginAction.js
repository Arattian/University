import { CUSTOM_API, fetchHelper, responseHelper } from './constants';

export const LOGIN = 'LOGIN';
export const WRONG_INPUT = 'WRONG_INPUT';
export const LOG_OUT = 'LOG_OUT';

function authorizate(loggedIn, userMail, userName) {
    return {
        type: LOGIN,
        loggedIn,
        userMail,
        userName
    }
}

function wrongInput() {
    return {
        type: WRONG_INPUT,
    }
}

export function logOut() {
    localStorage.token = 'undefined';
    return {
        type: LOG_OUT,
    }
}

export function login(inputs) {
    return (dispatch) => {
        (async () => {
            const response = await fetchHelper(`${CUSTOM_API}/login`, 'POST', {inputs});
            localStorage.token = response.token;
            response.success ? dispatch(authorizate(response.success, response.email, response.userName)) : dispatch(wrongInput());
        })();
    }
}

export function getUser() {
    return (dispatch) => {
        (async () => {
            const response = await fetchHelper(`${CUSTOM_API}/login`, 'GET');     
            if (responseHelper(response, dispatch)) {
                dispatch(authorizate(response.success, response.email, response.userName));
            } 
        })();
    }
}