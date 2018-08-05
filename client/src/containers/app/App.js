import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Main from '../../components/main/Main';
import Modal from '../modal/Modal';
import PeopleData from '../peopleData/PeopleData';
import ClassData from '../classData/ClassData';
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
                            <ClassData data={this.props.classData}/>
                        </Route>
                        <Route exact path='/admin/teachers'>
                            <PeopleData data={this.props.teacherData}/>
                        </Route>
                        <Route exact path='/admin/students'>
                            <PeopleData data={this.props.studentData}/>
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