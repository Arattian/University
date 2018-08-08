import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import totalDataReducer from './totalDataReducer';

const reducer = combineReducers({login: loginReducer, totalData: totalDataReducer});

export default reducer;