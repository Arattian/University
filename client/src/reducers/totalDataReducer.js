import { TOTAL_DATA, DATA_BELONG } from '../actions/totalDataAction';

const initialState = {
    classData: [],
    teacherData: [],
    studentData: [],
    dataBelongTo: null,
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
        case DATA_BELONG: 
            state = {
                ...state,
                dataBelongTo: action.dataBelongTo,
            }
            break;
        default: {
            return state;
        }
    }
    return state;
}


export default totalDataReducer;