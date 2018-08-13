import { REDIRECT, DROP_REDIRECT } from '../actions/redirectAction';

const initialState = {
    redirectTo: null,
    redirectId: null,
}


const redirectReducer = (state = initialState, action) => {
    switch(action.type) {
        case REDIRECT:
            state = {
                ...state,
                redirectId: action.redirectId,
                redirectTo: action.redirectTo,
            };
            break;
        case DROP_REDIRECT:
            state = {
                ...initialState,
            }
            break;
        default: {
            return state;
        }
    }
    return state;
}


export default redirectReducer;