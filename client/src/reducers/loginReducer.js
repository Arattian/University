import { LOGIN } from '../actions/loginAction';

const initialState = {
    loggedIn: false,
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            state = {
                ...state,
                loggedIn: action.loggedIn,
            };
            break;
        default: {
            return state;
        }
    }
    return state;
}


export default loginReducer;