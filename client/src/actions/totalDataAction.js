import { CUSTOM_API } from './constants';
import { showSuccess } from './alertAction';
import { redirect } from './redirectAction';
export const TOTAL_DATA = 'TOTAL_DATA';
export const CURRENT_DATA = 'CURRENT_DATA';
export const DROP_CURRENT_DATA = 'DROP_CURRENT_DATA';
export const AVAILABLE_TEACHERS = 'AVAILABLE_TEACHERS';

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

function availableTeachers() {
    return {
        type: AVAILABLE_TEACHERS,
    }
}

function setNullCurrentData() {
    return {
        type: DROP_CURRENT_DATA,
    }
}

export function dropCurrentData() {
    return (dispatch) => {
        dispatch(setNullCurrentData());
        dispatch(availableTeachers());
    }
}

export function getTotalData(message, redirectTo, redirectId) {
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
            message && dispatch(showSuccess(message));
            redirectId && dispatch(redirect(redirectTo, redirectId));
            dispatch(availableTeachers());
            message === 'edited' && dispatch(dropCurrentData()); //this line erases currentData ang gets new currentData
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
            getFrom === 'classes' && dispatch(availableTeachers());
        })();
    }
}