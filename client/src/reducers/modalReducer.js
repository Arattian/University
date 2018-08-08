import { CLOSE_MODAL, SHOW_MODAL, SHOW_MESSAGE, EDIT_MODAL, DELETE_MODAL } from '../actions/modalAction';

const initialState = {
    modalVisible: false,
    modalType: null,
    message: null,
    data: null,
}

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLOSE_MODAL:
            state = {
                ...state,
                message: null,
                modalVisible: false,
            };
            break;
        case SHOW_MODAL:
            state = {
                ...state,
                modalType: action.modalType,
                modalVisible: true,
            }
            break;
        case SHOW_MESSAGE:
            state = {
                ...state,
                modalType: null,
                message: action.message,
            }
            break;
        case EDIT_MODAL:
            state = {
                ...state,
                modalType: 'edit',
                modalVisible: true,
                data: action.data,
            };
            break;
        case DELETE_MODAL:
            state = {
                ...state,
                modalType: 'delete',
                modalVisible: true,
                data: action.data,
            };
            break;        
        default: 
            break;
    }
    return state;
}


export default modalReducer;