import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Home from '../../components/home/Home';
import TableWrapper from '../../containers/tableWrapper/TableWrapper';
import AddForm from '../../containers/form/addForm/AddForm';
import EditForm from '../../containers/form/editForm/EditForm';
import { tableRawCount } from '../../actions/tablesAction';
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
    }

    render() {
        return (
            <div className='app'>
                <Sidebar showModal={this.handleShowModalClick}/>
                    <Switch>
                        <Route exact path='/admin'>
                            <Home 
                                classCount={this.props.classCount}
                                teacherCount={this.props.teacherCount}
                                studentCount={this.props.studentCount}
                                courseCount={this.props.courseCount}
                                handleTableRawCount={this.props.boundTableRawCount}
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
                        text={this.props.alertMessage || 'Something went wrong!'}
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
        classCount: state.tables.classCount,
        teacherCount: state.tables.teacherCount,
        studentCount: state.tables.studentCount,
        courseCount: state.tables.courseCount,
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
        boundTableRawCount: () => dispatch(tableRawCount()),
        boundHideAlert: () => dispatch(hideAlert()),
        boundDeleteData: (id, deleteFrom) => dispatch(deleteAction(id, deleteFrom)),
        boundShowDelete: (id, deleteFrom) => dispatch(showDelete(id, deleteFrom)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));