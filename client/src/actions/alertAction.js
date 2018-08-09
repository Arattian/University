export const HIDE_ALERT = 'HIDE_ALERT';
export const SHOW_SUCCESS = 'SHOW_SUCCESS';
export const SHOW_ERROR = 'SHOW_ERROR';
export const SHOW_DELETE = 'SHOW_DELETE';

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

export function showDelete(deleteId, deleteFrom) {
    return {
        type: SHOW_DELETE,
        deleteId,
        deleteFrom,
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT,
    }
}