export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const EDIT_MODAL = 'EDIT_MODAL';
export const DELETE_MODAL = 'DELETE_MODAL';

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

export function editModal(data, dataBelongTo) {
    return {
        type: EDIT_MODAL,
        data,
        dataBelongTo,
    }
}

export function deleteModal(data, dataBelongTo) {
    return {
        type: DELETE_MODAL,
        data,
        dataBelongTo
    }
}

export function showMessage(message) {
    return {
        type: SHOW_MESSAGE,
        message,
    }
}



export function addClass(refs) {
    return (dispatch) => {
        (async () => {
            const response = await fetch('http://localhost:3030/admin/classes', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({name: refs.name.value, description: refs.description.value}),
            });
            const message = await response.json();
            dispatch(showMessage(message));
        })();
    }
}

export function addTeacher(refs) {
    return (dispatch) => {
        (async () => {
            const response = await fetch('http://localhost:3030/admin/teachers', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({firstname: refs.firstname.value, lastname: refs.lastname.value, age: refs.age.value}),
            });
            const message = await response.json();
            dispatch(showMessage(message));
        })();
    }
}

export function addStudent(refs) {
    return (dispatch) => {
        (async () => {
            const response = await fetch('http://localhost:3030/admin/students', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({firstname: refs.firstname.value, lastname: refs.lastname.value, age: refs.age.value}),
            });
            const message = await response.json();
            dispatch(showMessage(message));
        })();
    }
}

