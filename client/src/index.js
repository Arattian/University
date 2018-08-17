import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { store } from './store';
import Login from './containers/login/Login';
import App from './containers/app/App';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
                <Switch>
                        <Route exact path='/'>
                                <Redirect to="/login"/>
                        </Route>
                        <Route path='/login'>
                                <Login />
                        </Route>
                        <Route path='/admin'>
                                <App />
                        </Route>
                </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));
