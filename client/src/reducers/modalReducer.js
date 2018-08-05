import { CLOSE_MODAL, SHOW_MODAL } from '../actions/modalAction';

const initialState = {
    modalVisible: false,
    modalType: null,
}

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLOSE_MODAL:
            state = {
                ...state,
                modalVisible: false,
            };
            break;
        case SHOW_MODAL:
        debugger;
            state = {
                ...state,
                modalType: action.modalType,
                modalVisible: true,
            }
        default: {
            return state;
        }
    }
    return state;
}


export default modalReducer;