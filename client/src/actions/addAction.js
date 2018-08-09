import { CUSTOM_API } from './constants';
import { getTotalData } from './totalDataAction';
import { showSuccess, showError } from './alertAction';

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
            const res = await response.json();
            res.status ? dispatch(showSuccess('added')) : dispatch(showError());
            dispatch(getTotalData());
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
            const res = await response.json();
            res.status ? dispatch(showSuccess('added')) : dispatch(showError());
            dispatch(getTotalData());
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
                body: JSON.stringify({firstname: data.firstname, lastname: data.lastname, age: data.age, classId: data.classId}),
            });
            const res = await response.json();
            res.status ? dispatch(showSuccess('added')) : dispatch(showError());
            dispatch(getTotalData());
        })();
    }
}

export function addCourse(data) {
    return (dispatch) => {
        (async () => {
            const response = await fetch(`${CUSTOM_API}/admin/courses`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({
                    name: data.firstname,
                    startTime: data.startTime,
                    endTime: data.endTime, 
                    start: data.start,
                    end: data.end,
                    teacherId: data.teacherId,
                    classId: data.classId
                }),
            });
            const res = await response.json();
            res.status ? dispatch(showSuccess('added')) : dispatch(showError());
            dispatch(getTotalData());
        })();
    }
}
