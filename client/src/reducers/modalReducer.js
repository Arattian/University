import { CLOSE_MODAL, SHOW_MODAL, SHOW_MESSAGE } from '../actions/modalAction';

const initialState = {
    modalVisible: false,
    modalType: null,
    message: null,
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
        default: 
            break;
    }
    return state;
}


export default modalReducer;