import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Main from '../../components/main/Main';
import Modal from '../modal/Modal';
import Data from '../data/Data';
import { getTotalData } from '../../actions/totalDataAction';
import { showModal } from '../../actions/modalAction';
import './App.css';

class App extends React.Component {

    componentDidMount() {
        if (localStorage.token === 'undefined') {
            this.props.history.push('/');
            return;
        }
        this.props.boundGetTotalData();
    }

    handleShowModalClick = (modalType) => {
        this.props.boundShowModal(modalType);
    }

    changeRoute = (route) => {
        this.props.history.push(`/admin/${route}`);
    }

    render() {
        return (
            <div className='app'>
                <Sidebar showModal={this.handleShowModalClick}/>
                    <Switch>
                        <Route exact path='/admin'>
                            <Main 
                                totalClasses={this.props.classData.length}
                                totalTeachers={this.props.teacherData.length}
                                totalStudents={this.props.studentData.length}
                                changeRoute={this.changeRoute}
                            />
                        </Route>
                        <Route exact path='/admin/classes'>
                            <Data data={this.props.classData} dataBelongTo={'class'} showModal={this.handleShowModalClick}/>
                        </Route>
                        <Route exact path='/admin/teachers'>
                            <Data data={this.props.teacherData} dataBelongTo={'teacher'} showModal={this.handleShowModalClick}/>
                        </Route>
                        <Route exact path='/admin/students'>
                            <Data data={this.props.studentData} dataBelongTo={'student'} showModal={this.handleShowModalClick}/>
                        </Route>
                    </Switch>
                {this.props.modalVisible ? <Modal modalType={this.props.modalType} message={this.props.message}/> : false}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalVisible: state.modal.modalVisible,
        modalType: state.modal.modalType,
        message: state.modal.message,
        classData: state.totalData.classData,
        teacherData: state.totalData.teacherData,
        studentData: state.totalData.studentData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundGetTotalData: () => dispatch(getTotalData()),
        boundShowModal: (modalType) => dispatch(showModal(modalType)),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));