export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';

export function showModal(modalType) {
    return {
        type: SHOW_MODAL,
        modalType
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL,
    }
}