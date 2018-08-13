import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Home from '../../components/home/Home';
import TableWrapper from '../../containers/tableWrapper/TableWrapper';
import AddForm from '../../containers/form/addForm/AddForm';
import EditForm from '../../containers/form/editForm/EditForm';
import { getTotalData } from '../../actions/tablesAction';
import { hideAlert, showDelete } from '../../actions/alertAction';
import { deleteAction } from '../../actions/deleteAction';
import SweetAlert from 'sweetalert2-react';
import './App.css';

class App extends React.Component {

    componentDidMount() {
        if (localStorage.token === 'undefined') {
            this.props.history.push('/');
            return;
        }
        this.props.boundGetTotalData();
    }

    render() {
        return (
            <div className='app'>
                <Sidebar showModal={this.handleShowModalClick}/>
                    <Switch>
                        <Route exact path='/admin'>
                            <Home 
                                totalClasses={this.props.classList.length}
                                totalTeachers={this.props.teacherList.length}
                                totalStudents={this.props.studentList.length}
                                totalCourses={this.props.courseList.length}
                            />
                        </Route>
                        <Route exact path='/admin/:page'>
                            <TableWrapper boundShowDelete={this.props.boundShowDelete}/>
                        </Route>
                        <Route exact path='/admin/:page/add'>
                            <AddForm />
                        </Route>
                        <Route exact path='/admin/:page/edit/:id'>
                            <EditForm />
                        </Route>
                    </Switch>
                    <SweetAlert
                        show={this.props.showSuccess}
                        type={'success'}
                        title={`Successfully ${this.props.alertMessage}`}
                        confirmButtonColor={'#445260'}
                        confirmButtonClass={'msg msg-success'}
                        onConfirm={() => this.props.boundHideAlert()}
                    />
                    <SweetAlert
                        show={this.props.showError}
                        type={'error'}
                        title={`Ooops...`}
                        text={'Something went wrong!'}
                        confirmButtonColor={'#ff5f59'}
                        confirmButtonClass={'msg msg-error'}
                        onConfirm={() => this.props.boundHideAlert()}
                    />
                    <SweetAlert
                        show={this.props.showDelete}
                        type={'warning'}
                        title={`Are you sure?`}
                        text={"You won't be able to revert this!"}
                        confirmButtonColor={'#ff5f59'}
                        confirmButtonClass={'msg msg-error'}
                        confirmButtonText={'Delete it!'}
                        cancelButtonClass={'msg msg-cancel'}
                        showCancelButton= {true}
                        onConfirm={() => {
                            this.props.boundDeleteData(this.props.deleteId, this.props.deleteFrom);
                            this.props.boundHideAlert();
                            }
                        }
                        onCancel={() => this.props.boundHideAlert()}
                    />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        classList: state.tables.classList,
        teacherList: state.tables.teacherList,
        studentList: state.tables.studentList,
        courseList: state.tables.courseList,
        showSuccess: state.alert.showSuccess,
        showError: state.alert.showError,
        showDelete: state.alert.showDelete,
        alertMessage: state.alert.alertMessage,
        deleteId: state.alert.deleteId,
        deleteFrom: state.alert.deleteFrom,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundGetTotalData: () => dispatch(getTotalData()),
        boundHideAlert: () => dispatch(hideAlert()),
        boundDeleteData: (id, deleteFrom) => dispatch(deleteAction(id, deleteFrom)),
        boundShowDelete: (id, deleteFrom) => dispatch(showDelete(id, deleteFrom)),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));