import { CUSTOM_API, fetchHelper } from './constants';

export const LOGIN = 'LOGIN';
function loginStatus(loggedIn) {
    return {
        type: LOGIN,
        loggedIn
    }
}

export function login(inputs) {
    return (dispatch) => {
        (async () => {
            const response = await fetchHelper(`${CUSTOM_API}/login`, 'POST', {inputs});
            const data = await response.json();
            localStorage.token = data.token;
            dispatch(loginStatus(data.result));
        })();
    }
}