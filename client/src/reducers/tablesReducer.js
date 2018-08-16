import { SET_CLASSES, SET_COURSES, SET_TEACHERS, SET_STUDENTS,CURRENT_DATA, DROP_CURRENT_DATA, AVAILABLE_TEACHERS, COUNT_RAWS } from '../actions/tablesAction';

const initialState = {
    fetched: false,
    classCount: 0,
    teacherCount: 0,
    studentCount: 0,
    courseCount: 0,
    classList: [],
    teacherList: [],
    studentList: [],
    courseList: [],
    availableTeachers: [],
    currentItem: null,
}


const tablesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CLASSES:
            state = {
                ...state,
                fetched: true,
                classList: action.list,
            };
            break;
        case SET_COURSES:
            state = {
                ...state,
                fetched: true,
                courseList: action.list,
            };
            break;
        case SET_STUDENTS:
            state = {
                ...state,
                fetched: true,
                studentList: action.list,
            };
            break;
        case SET_TEACHERS:
            state = {
                ...state,
                fetched: true,
                teacherList: action.list,
            }
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
        case COUNT_RAWS:
            state = {
                ...state,
                classCount: action.classCount,
                teacherCount: action.teacherCount,
                courseCount: action.courseCount,
                studentCount: action.studentCount,
            }
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