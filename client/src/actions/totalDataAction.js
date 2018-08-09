import { CUSTOM_API } from './constants';

export const TOTAL_DATA = 'TOTAL_DATA';
export const CURRENT_DATA = 'CURRENT_DATA';
export const DROP_CURRENT_DATA = 'DROP_CURRENT_DATA';

function setData(classData, teacherData, studentData, courseData) {
    return {
        type: TOTAL_DATA,
        classData,
        teacherData,
        studentData,
        courseData   
    }
}

function setCurrentData(currentData) {
    return {
        type: CURRENT_DATA,
        currentData
    }
}

export function getTotalData() {
    return (dispatch) => {
        (async () => {
            const response = await fetch(`${CUSTOM_API}/admin`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
            });
            const data = await response.json();
            dispatch(setData(data.classData, data.teacherData, data.studentData, data.courseData));
        })();
    }
}

export function getCurrentData(id, getFrom) {
    return (dispatch) => {
        (async () => {
            const response = await fetch(`${CUSTOM_API}/admin/${getFrom}/edit`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({id}),
            });
            const data = await response.json();
            dispatch(setCurrentData(data));
        })();
    }
}

export function dropCurrentData() {
    return {
        type: DROP_CURRENT_DATA,
    }
}