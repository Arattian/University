import { TOTAL_DATA } from '../actions/totalDataAction';

const initialState = {
    classData: [],
    teacherData: [],
    studentData: [],
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
        default: {
            return state;
        }
    }
    return state;
}


export default totalDataReducer;