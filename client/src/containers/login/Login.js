import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from '../../components/loginForm/LoginForm';
import { login, getUser } from '../../actions/loginAction';
import './Login.css';
class Login extends React.Component {
        
    componentDidMount() {
        if (localStorage.token !== 'undefined') {
            this.props.boundGetUser();
        }
    }

    componentDidUpdate() {
        if (this.props.userName && localStorage.token !== 'undefined') {
            this.props.history.push(`/${this.props.userName}`);
        } 
    }
    
    render() {
        return (
            <LoginForm 
                handleLogin={this.props.boundHandleLogin}
                loggedIn={this.props.loggedIn}
                history={this.props.history}
                userName={this.props.userName}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.login.loggedIn,
        userName: state.login.userName,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundGetUser: () => dispatch(getUser()),
        boundHandleLogin: (inputs) => dispatch(login(inputs)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));