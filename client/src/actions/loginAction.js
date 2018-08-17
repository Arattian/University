import { CUSTOM_API, fetchHelper } from './constants';

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
    return {
        type: LOG_OUT,
    }
}

export function login(inputs) {
    return (dispatch) => {
        (async () => {
            const response = await fetchHelper(`${CUSTOM_API}/login`, 'POST', {inputs});
            const res = await response.json();
            localStorage.token = res.token;
            res.result ? dispatch(authorizate(res.result, res.email, res.userName)) : dispatch(wrongInput());
        })();
    }
}

export function getUser() {
    return (dispatch) => {
        (async () => {
            const response = await fetchHelper(`${CUSTOM_API}/login`, 'GET');
            const res = await response.json();
            dispatch(authorizate(res.result, res.email, res.userName)); 
        })();
    }
}