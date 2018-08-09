export const HIDE_ALERT = 'HIDE_ALERT';
export const SHOW_SUCCESS = 'SHOW_SUCCESS';
export const SHOW_ERROR = 'SHOW_ERROR';

export function showSuccess(alertMessage) {
    return {
        type: SHOW_SUCCESS,
        alertMessage
    }
}

export function showError() {
    return {
        type: SHOW_ERROR,
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT,
    }
}