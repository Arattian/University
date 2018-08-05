import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import totalDataReducer from './totalDataReducer';
import dialogReducer from './dialogReducer';

const reducer = combineReducers({login: loginReducer, totalData: totalDataReducer, dialog: dialogReducer});

export default reducer;