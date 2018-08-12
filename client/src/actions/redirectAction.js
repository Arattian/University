export const REDIRECT = 'REDIRECT';
export const DROP_REDIRECT = 'DROP_REDIRECT';

export function redirect(redirectTo, redirectId) {
    return {
        type: REDIRECT,
        redirectTo,
        redirectId,
    }
}

export function dropRedirect() {
    return {
        type: DROP_REDIRECT,
    }
}