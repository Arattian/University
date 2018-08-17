import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {
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
                    <p className={this.props.loggedIn === 'failed' ? 'failed' : 'hide'}>Wrong email or password</p>
                    <button type='submit' className='btn'>Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;