import { SHOW_SUCCESS, SHOW_ERROR, HIDE_ALERT } from '../actions/alertAction';

const initialState = {
    showSuccess: false,
    showError: false,
    alertMessage: false,
}


const alertReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_SUCCESS:
            state = {
                ...state,
                showSuccess: true,
                alertMessage: action.alertMessage,
            };
            break;
        case SHOW_ERROR:
            state = {
                ...state,
                showError: true,
            }
            break;
        case HIDE_ALERT:
            state = {
                ...state,
                showError: false,
                showSuccess: false,
                alertMessage: false,
            };
            break;
        default: {
            return state;
        }
    }
    return state;
}


export default alertReducer;