import { SHOW_SUCCESS, SHOW_ERROR, HIDE_ALERT, SHOW_DELETE } from '../actions/alertAction';

const initialState = {
    showSuccess: false,
    showError: false,
    alertMessage: false,
    showDelete: false,
    deleteId: null,
    deleteFrom: null,
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
                showDelete: false,
                deleteId: null,
                deleteFrom: null,
            };
            break;
        case SHOW_DELETE:
            state = {
                ...state,
                showDelete: true,
                deleteId: action.deleteId,
                deleteFrom: action.deleteFrom,
            };
            break;
        default: {
            return state;
        }
    }
    return state;
}


export default alertReducer;