import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from './store';
import Login from './containers/login/Login';
import App from './containers/app/App';
import './index.css';

ReactDOM.render(
    <Router>
            <Switch>
                <Route exact path='/'>
                    <Provider store={store}>
                        <Login />
                    </Provider>
                </Route>
                <Route path='/admin'>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </Route>
            </Switch>
    </Router>,
    document.getElementById('root'));
