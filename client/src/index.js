import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from './store';
import Login from './components/login/Login';
import App from './components/app/App';
import './index.css';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/'>
                <Provider store={store}>
                    <Login />
                </Provider>
            </Route>
            <Route exact path='/admin'>
                <App />
            </Route>
        </Switch>
    </Router>,
    document.getElementById('root'));
