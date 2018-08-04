import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './App.css';

class App extends React.Component {

    componentDidMount() {
        if (localStorage.token === "undefined") {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>Something</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));