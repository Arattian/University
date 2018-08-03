import React from 'react';
import { connect } from 'react-redux';
import './Login.css';
class Login extends React.Component {

    submit(ev) {
        const {mail, pass} = this.refs;
        ev.preventDefault();
    }

    render() {
        return (
            <form onSubmit={(ev) => this.submit(ev)}>
                <h2>Login</h2>
                <div className="input-container">
                    <i className="fa fa-envelope icon"></i>
                    <input className="input-field" type="text" placeholder="Email" name="mail" ref="mail"/>
                </div>
                <div className="input-container">
                    <i className="fa fa-key icon"></i>
                    <input className="input-field" type="password" placeholder="Password" name="psw" ref="pass"/>
                </div>
                <button type="submit" className="btn">Login</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);