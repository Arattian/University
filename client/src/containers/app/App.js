import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Main from '../../components/main/Main';
import Dialog from '../dialog/Dialog';
import { getTotalData } from '../../actions/totalDataAction';
import './App.css';

class App extends React.Component {

    componentDidMount() {
        if (localStorage.token === "undefined") {
            this.props.history.push('/');
            return;
        }
        this.props.handleGetTotalData();
    //stex uxarki get request u staci sax bazayum exac student usanox ev aylni qanak
    //dzax masum add class add student add teacher dialog forma galis state@ poxelu mijocov urde grum em petq exac dataner@ submit anum u et avelanuma im storum
    //aj masi cankacaci vra clickic heto history-um pusha @lnum et click exac@, gnuma @te u sax bazayi exac@ sirun cuca tali
    }

    render() {
        return (
            <div className='app'>
                <Sidebar />
                <Main 
                    totalClasses={this.props.totalClasses}
                    totalTeachers={this.props.totalTeachers}
                    totalStudents={this.props.totalStudents}
                />
                {this.props.dialogVisible ? <Dialog dialogType={this.props.dialogType} /> : false}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dialogVisible: state.dialog.dialogVisible,
        totalClasses: state.totalData.totalClasses,
        totalTeachers: state.totalData.totalTeachers,
        totalStudents: state.totalData.totalStudents,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetTotalData: () => dispatch(getTotalData()),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));