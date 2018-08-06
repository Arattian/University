import { showMessage } from './modalAction';

export const TOTAL_DATA = 'TOTAL_DATA';
export const DATA_BELONG = 'DATA_BELONG';

function setData(classData, teacherData, studentData) {
    return {
        type: TOTAL_DATA,
        classData,
        teacherData,
        studentData   
    }
}

export function setDataBelong(dataBelongTo) {
    return {
        type: DATA_BELONG,
        dataBelongTo,
    }
}


export function getTotalData() {
    return (dispatch) => {
        (async () => {
            const response = await fetch('http://localhost:3030/admin', {
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

export function editAction(refs, id, dataBelongTo) {
    return (dispatch) => {
        (async () => {
            const response = await fetch('http://localhost:3030/admin/', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({refs, id, dataBelongTo}),
            });
            const message = await response.json();
            dispatch(showMessage(message));
        })();
    }
}

export function deleteAction(id, dataBelongTo) {
    return (dispatch) => {
        (async () => {
            const response = await fetch(`http://localhost:3030/admin/`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({id, dataBelongTo}),
            });
            const message = await response.json();
            dispatch(showMessage(message));
        })();
    }
}
