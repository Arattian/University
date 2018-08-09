import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import totalDataReducer from './totalDataReducer';
import alertReducer from './alertReducer';

const reducer = combineReducers({login: loginReducer, totalData: totalDataReducer, alert: alertReducer});

export default reducer;