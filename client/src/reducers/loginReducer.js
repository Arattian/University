import { LOGIN } from '../actions/loginAction';

const reducer = (state={}, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                loggedIn: action.loggedIn,
            };
        default: {
            return state;
        }
    }
}


export default reducer;