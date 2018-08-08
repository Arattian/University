import { SHOW_MESSAGE } from '../actions/messageAction';

const initialState = {
    message: null,
}

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
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