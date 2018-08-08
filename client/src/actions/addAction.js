import { CUSTOM_API } from './constants';

export function addClass(data) {
    return (dispatch) => {
        (async () => {
            const response = await fetch(`${CUSTOM_API}/admin/classes`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({name: data.name, teacherId: data.teacherId}),
            });
            // const message = await response.json();
        })();
    }
}

export function addTeacher(data) {
    return (dispatch) => {
        (async () => {
            const response = await fetch(`${CUSTOM_API}/admin/teachers`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({firstname: data.firstname, lastname: data.lastname, age: data.age}),
            });
            // const message = await response.json();
        })();
    }
}

export function addStudent(data) {
    return (dispatch) => {
        (async () => {
            const response = await fetch(`${CUSTOM_API}/admin/students`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({firstname: data.firstname, lastname: data.lastname, age: data.age}),
            });
            // const message = await response.json();
        })();
    }
}

