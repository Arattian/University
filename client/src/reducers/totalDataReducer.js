import { TOTAL_DATA } from '../actions/totalDataAction';

const initialState = {
    totalClasses: 0,
    totalTeachers: 0,
    totalStudents: 0,
}

const totalDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOTAL_DATA:
            state = {
                ...state,
                totalClasses: action.totalClasses,
                totalTeachers: action.totalTeachers,
                totalStudents: action.totalStudents
            };
            break;
        default: {
            return state;
        }
    }
    return state;
}


export default totalDataReducer;