import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import totalDataReducer from './totalDataReducer';
import alertReducer from './alertReducer';
import redirectReducer from './redirectReducer';

const reducer = combineReducers({login: loginReducer, totalData: totalDataReducer, alert: alertReducer, redirect: redirectReducer});

export default reducer;