import { LOGIN, WRONG_INPUT, LOG_OUT } from '../actions/loginAction';

const initialState = {
    loggedIn: null,
    userMail: null,
    userName: null,
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            state = {
                ...state,
                loggedIn: action.loggedIn,
                userMail: action.userMail,
                userName: action.userName,
            };
            break;
        case WRONG_INPUT:
            state = {
                ...state,
                loggedIn: 'failed',
            };
            break;
        case LOG_OUT:
            state = {
                ...initialState,
            };
            break;
        default: {
            return state;
        }
    }
    return state;
}


export default loginReducer;