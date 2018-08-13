import { CUSTOM_API } from './constants';
import { showSuccess } from './alertAction';
import { redirect } from './redirectAction';
export const TOTAL_DATA = 'TOTAL_DATA';
export const CURRENT_DATA = 'CURRENT_DATA';
export const DROP_CURRENT_DATA = 'DROP_CURRENT_DATA';
export const AVAILABLE_TEACHERS = 'AVAILABLE_TEACHERS';

function setData(classList, teacherList, studentList, courseList) {
    return {
        type: TOTAL_DATA,
        classList,
        teacherList,
        studentList,
        courseList   
    }
}

function setCurrentItem(currentItem) {
    return {
        type: CURRENT_DATA,
        currentItem
    }
}

function availableTeachers() {
    return {
        type: AVAILABLE_TEACHERS,
    }
}

function setNullCurrentItem() {
    return {
        type: DROP_CURRENT_DATA,
    }
}

export function dropCurrentItem() {
    return (dispatch) => {
        dispatch(setNullCurrentItem());
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
            dispatch(setData(data.classList, data.teacherList, data.studentList, data.courseList));
            message && dispatch(showSuccess(message));
            redirectId && dispatch(redirect(redirectTo, redirectId));
            dispatch(availableTeachers());
            message === 'edited' && dispatch(dropCurrentItem()); //this line erases currentItem ang gets new currentItem
        })();
    }
}

export function getCurrentItem(id, pageName) {
    return (dispatch) => {
        (async () => {
            const response = await fetch(`${CUSTOM_API}/admin/${pageName}/edit`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({id}),
            });
            const data = await response.json();
            dispatch(setCurrentItem(data));
            pageName === 'classes' && dispatch(availableTeachers());
        })();
    }
}