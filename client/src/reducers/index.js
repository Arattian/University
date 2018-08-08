import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import totalDataReducer from './totalDataReducer';
import modalReducer from './modalReducer';

const reducer = combineReducers({login: loginReducer, totalData: totalDataReducer, modal: modalReducer});

export default reducer;