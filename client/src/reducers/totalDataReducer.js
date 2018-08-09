import { TOTAL_DATA, CURRENT_DATA, DROP_CURRENT_DATA } from '../actions/totalDataAction';

const initialState = {
    classData: [],
    teacherData: [],
    studentData: [],
    courseData: [],
    currentData: null,
}


const totalDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOTAL_DATA:
            state = {
                ...state,
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
        default: {
            return state;
        }
    }
    return state;
}


export default totalDataReducer;