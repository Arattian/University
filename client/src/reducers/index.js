import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import tablesReducer from './tablesReducer';
import alertReducer from './alertReducer';
import redirectReducer from './redirectReducer';

const reducer = combineReducers({login: loginReducer, tables: tablesReducer, alert: alertReducer, redirect: redirectReducer});

export default reducer;