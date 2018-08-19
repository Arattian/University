import { CUSTOM_API, fetchHelper, responseHelper } from './constants';
import { showSuccess } from './alertAction';
import { redirect } from './redirectAction';
export const CURRENT_DATA = 'CURRENT_DATA';
export const DROP_CURRENT_DATA = 'DROP_CURRENT_DATA';
export const AVAILABLE_TEACHERS = 'AVAILABLE_TEACHERS';
export const COUNT_RAWS = 'COUNT_RAWS';
export const SET_CLASSES = 'SET_CLASSES';
export const SET_COURSES = 'SET_COURSES';
export const SET_TEACHERS = 'SET_TEACHERS';
export const SET_STUDENTS = 'SET_STUDENTS';

function setTable(list, tableName) {
    switch(tableName) {
        case 'classes':
            return {
                type: SET_CLASSES,
                list,
            };
        case 'teachers':
            return {
                type: SET_TEACHERS,
                list,
            };
        case 'students':
            return {
                type: SET_STUDENTS,
                list,
            };
        case 'courses':
            return {
                type: SET_COURSES,
                list,
            };
        default:
    }
}

function countRaws(classCount, teacherCount, studentCount, courseCount) {
    return {
        type: COUNT_RAWS,
        classCount,
        teacherCount,
        studentCount,
        courseCount
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

export function getTable(tableName, message, redirectId) {
    return (dispatch) => {
        (async () => {
            const response = await fetchHelper(`${CUSTOM_API}/admin/${tableName}`, 'GET');
            if (responseHelper(response, dispatch)) {
                switch(tableName) {
                    case 'classes':
                        dispatch(setTable(response, tableName));
                        dispatch(availableTeachers());
                        break;
                    case 'teachers':
                        dispatch(setTable(response, tableName));
                        dispatch(availableTeachers());
                        break;                 
                    default:
                        dispatch(setTable(response, tableName));
                }
                message && dispatch(showSuccess(message));
                redirectId && dispatch(redirect(tableName, redirectId));
                message === 'edited' && dispatch(dropCurrentItem());
            }
        })();
    }
}

export function tableRawCount() {
    return (dispatch) => {
        (async () => {
            const response = await fetchHelper(`${CUSTOM_API}/admin`, 'GET');

            dispatch(countRaws(response.classCount, response.teacherCount, response.studentCount, response.courseCount));
        })();
    }
}


export function getCurrentItem(id, pageName) {
    return (dispatch) => {
        (async () => {
            const response = await fetchHelper(`${CUSTOM_API}/admin/${pageName}/edit`, 'POST', {id});
            if (!response) {
                return;
            }
            dispatch(setCurrentItem(response));
            pageName === 'classes' && dispatch(availableTeachers());
        })();
    }
}