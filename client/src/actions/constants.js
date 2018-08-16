// export const CUSTOM_API = 'https://university-server.herokuapp.com';
export const CUSTOM_API = 'http://localhost:3030';
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
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
        });
    }
}