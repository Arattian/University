import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/loginAction';
import './Login.css';
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            mail: '',
            pass: '',
        }
    }

    handleInputChange = (ev, fieldToChange) => {
        this.setState({[fieldToChange] : ev.target.value});
    }

    submit = (ev) => {
        this.props.handleLogin(this.state);
        ev.preventDefault();
    }

    shouldComponentUpdate(nextProps) {
        if (localStorage.token !== 'undefined' && nextProps.loggedIn) {
            this.props.history.push('/admin');
            return false;
        } else {
            return true;
        }
    }
    
    render() {
        return (
            <div className='form-container'>
                <form className='login-form' onSubmit={this.submit}>
                    <h2>Login Panel</h2>
                    <div className='input-container'>
                        <i className='fa fa-envelope icon'></i>
                        <input 
                            className='input-field'
                            type='email'
                            placeholder='Email'
                            name='mail'
                            value={this.state.mail}
                            onChange={(ev) => this.handleInputChange(ev, 'mail')}
                            required
                        />
                    </div>
                    <div className='input-container'>
                        <i className='fa fa-key icon'></i>
                        <input 
                            className='input-field'
                            type='password'
                            placeholder='Password'
                            name='psw'
                            value={this.state.pass}
                            onChange={(ev) => this.handleInputChange(ev, 'pass')}
                            required
                        />
                    </div>
                    <button type='submit' className='btn'>Login</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.login.loggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: (inputs) => dispatch(login(inputs)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));