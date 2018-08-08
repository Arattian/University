import { TOTAL_DATA, CURRENT_DATA } from '../actions/totalDataAction';

const initialState = {
    classData: [],
    teacherData: [],
    studentData: [],
    currentData: null,
}


const totalDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOTAL_DATA:
            state = {
                ...state,
                classData: action.classData,
                teacherData: action.teacherData,
                studentData: action.studentData
            };
            break;
        case CURRENT_DATA:
            state = {
                ...state,
                currentData: action.currentData,
            }
        default: {
            return state;
        }
    }
    return state;
}


export default totalDataReducer;