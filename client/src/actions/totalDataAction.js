export const TOTAL_DATA = 'TOTAL_DATA';


function setData(classData, teacherData, studentData) {
    return {
        type: TOTAL_DATA,
        classData,
        teacherData,
        studentData   
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