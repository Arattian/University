import { TOTAL_DATA, CURRENT_DATA, DROP_CURRENT_DATA, AVAILABLE_TEACHERS } from '../actions/tablesAction';

const initialState = {
    fetched: false,
    classList: [],
    teacherList: [],
    studentList: [],
    courseList: [],
    availableTeachers: [],
    currentItem: null,
}


const tablesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOTAL_DATA:
            state = {
                ...state,
                fetched: true,
                classList: action.classList,
                teacherList: action.teacherList,
                studentList: action.studentList,
                courseList: action.courseList,
            };
            break;
        case CURRENT_DATA:
            state = {
                ...state,
                currentItem: action.currentItem,
            }
            break;
        case DROP_CURRENT_DATA:
            state = {
                ...state,
                currentItem: null,
            };
            break;
        case AVAILABLE_TEACHERS:
                const teachers = [];
                const { teacherList, classList, currentItem } = state;
                for (let i=0; i < teacherList.length; ++i){
                    let matched = false;
                    for(let j=0; j < classList.length; ++j){
                        if(teacherList[i].id === classList[j].Teacher.id){
                            matched = true;
                        }
                    }
                    if(!matched){
                        teachers.push(teacherList[i]);
                    }
                }
                currentItem && teachers.unshift(currentItem.Teacher);
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


export default tablesReducer;