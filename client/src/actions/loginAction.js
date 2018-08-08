import { CUSTOM_API } from './constants';
export const LOGIN = 'LOGIN';
function loginStatus(loggedIn) {
    return {
        type: LOGIN,
        loggedIn
    }
}

export function login(mail, pass) {
    return (dispatch) => {
        (async () => {
            const response = await fetch(`${CUSTOM_API}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({mail: mail.value, pass: pass.value})
            });
            const data = await response.json();
            localStorage.token = data.token
            dispatch(loginStatus(data.result));
        })();
    }
}