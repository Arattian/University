import { CUSTOM_API } from './constants';

export const TOTAL_DATA = 'TOTAL_DATA';
export const CURRENT_DATA = 'CURRENT_DATA';

function setData(classData, teacherData, studentData) {
    return {
        type: TOTAL_DATA,
        classData,
        teacherData,
        studentData   
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
            dispatch(setData(data.classData, data.teacherData, data.studentData));
        })();
    }
}

export function getCurrentData(id) {
    return (dispatch) => {
        (async () => {
            const response = await fetch(`${CUSTOM_API}/admin/classes/edit`, {
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
