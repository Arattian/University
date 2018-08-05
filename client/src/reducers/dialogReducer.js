import { DIALOG_VISIBILITY } from '../actions/dialogAction';

const initialState = {
    dialogVisible: false,
}

const dialogReducer = (state = initialState, action) => {
    switch(action.type) {
        case DIALOG_VISIBILITY:
            state = {
                ...state,
                dialogVisible: action.visible,
            };
            break;
        default: {
            return state;
        }
    }
    return state;
}


export default dialogReducer;