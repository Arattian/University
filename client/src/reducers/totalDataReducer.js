import { TOTAL_DATA, CURRENT_DATA, DROP_CURRENT_DATA, AVAILABLE_TEACHERS } from '../actions/totalDataAction';

const initialState = {
    fetched: false,
    classData: [],
    teacherData: [],
    studentData: [],
    courseData: [],
    availableTeachers: [],
    currentData: null,
}


const totalDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOTAL_DATA:
            state = {
                ...state,
                fetched: true,
                classData: action.classData,
                teacherData: action.teacherData,
                studentData: action.studentData,
                courseData: action.courseData,
            };
            break;
        case CURRENT_DATA:
            state = {
                ...state,
                currentData: action.currentData,
            }
            break;
        case DROP_CURRENT_DATA:
            state = {
                ...state,
                currentData: null,
            };
            break;
        case AVAILABLE_TEACHERS:
                const teachers = [];
                const { teacherData, classData, currentData } = state;
                for (let i=0; i < teacherData.length; ++i){
                    let matched = false;
                    for(let j=0; j < classData.length; ++j){
                        if(teacherData[i].id === classData[j].Teacher.id){
                            matched = true;
                        }
                    }
                    if(!matched){
                        teachers.push(teacherData[i]);
                    }
                }
                currentData && teachers.unshift(currentData.Teacher);
                state = {
                    ...state,
                    availableTeachers: teachers,
                };
            break;
        default: {
            return state;
        }
    }
    return state;
}


export default totalDataReducer;