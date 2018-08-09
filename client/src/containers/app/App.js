import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import SweetAlert from 'sweetalert2-react';
import Sidebar from '../../components/sidebar/Sidebar';
import Home from '../../components/home/Home';
import ClassData from '../data/classData/ClassData';
import TeacherData from '../data/teacherData/TeacherData';
import StudentData from '../data/studentData/StudentData';
import CourseData from '../data/courseData/CourseData';
import ClassForm from '../forms/classForm/ClassForm';
import TeacherForm from '../forms/teacherForm/TeacherForm';
import StudentForm from '../forms/studentForm/StudentForm';
import CourseForm from '../forms/courseForm/CourseForm';
import { getTotalData } from '../../actions/totalDataAction';
import { hideAlert, showDelete } from '../../actions/alertAction';
import { deleteAction } from '../../actions/deleteAction';
import './App.css';

class App extends React.Component {

    componentDidMount() {
        if (localStorage.token === 'undefined') {
            this.props.history.push('/');
            return;
        }
        this.props.boundGetTotalData();
    }

    handleEditRedirect = (id, belongTo) => {
        this.props.history.push(`/admin/${belongTo}/edit/${id}`)
    }

    handleDelete = (id, deleteFrom) => {
        this.props.boundShowDelete(id, deleteFrom);
    }

    closeForm = (redirectTo) => {
        this.props.history.push(`/admin/${redirectTo}`);
    }

    render() {
        return (
            <div className='app'>
                <Sidebar showModal={this.handleShowModalClick}/>
                    <Switch>
                        <Route exact path='/admin'>
                            <Home 
                                totalClasses={this.props.classData.length}
                                totalTeachers={this.props.teacherData.length}
                                totalStudents={this.props.studentData.length}
                                totalCourses={this.props.courseData.length}
                            />
                        </Route>
                        <Route exact path='/admin/classes'>
                            <ClassData 
                                data={this.props.classData}
                                handleEditRedirect={this.handleEditRedirect}
                                handleDelete={this.handleDelete}
                            />
                        </Route>
                        <Route exact path='/admin/teachers'>
                            <TeacherData 
                                data={this.props.teacherData}
                                handleEditRedirect={this.handleEditRedirect}
                                handleDelete={this.handleDelete}
                            />
                        </Route>
                        <Route exact path='/admin/students'>
                            <StudentData 
                                data={this.props.studentData} 
                                handleEditRedirect={this.handleEditRedirect}
                                handleDelete={this.handleDelete}
                            />
                        </Route>
                        <Route exact path='/admin/courses'>
                            <CourseData
                                data={this.props.courseData}
                                handleEditRedirect={this.handleEditRedirect}
                                handleDelete={this.handleDelete}
                            />
                        </Route>
                        <Route exact path='/admin/classes/add'>
                            <ClassForm 
                                selectData={this.props.teacherData}
                                closeForm={this.closeForm}
                            />
                        </Route>
                        <Route exact path='/admin/teachers/add'>
                            <TeacherForm closeForm={this.closeForm}/>
                        </Route>
                        <Route exact path='/admin/students/add'>
                            <StudentForm 
                                selectData={this.props.classData} 
                                closeForm={this.closeForm}
                            />
                        </Route>
                        <Route exact path='/admin/courses/add'>
                            <CourseForm 
                                selectClassData={this.props.classData}
                                selectTeacherData={this.props.teacherData}
                                closeForm={this.closeForm}
                            />
                        </Route>
                        <Route exact path='/admin/classes/edit/:id'>
                            <ClassForm 
                                closeForm={this.closeForm}
                                selectData={this.props.teacherData}
                            />
                        </Route>
                        <Route exact path='/admin/teachers/edit/:id'>
                            <TeacherForm 
                                closeForm={this.closeForm}
                            />
                        </Route>
                        <Route exact path='/admin/students/edit/:id'>
                            <StudentForm 
                                closeForm={this.closeForm}
                                selectData={this.props.classData}
                            />
                        </Route>
                        <Route exact path='/admin/courses/edit/:id'>
                            <CourseForm 
                                closeForm={this.closeForm}
                                selectClassData={this.props.classData}
                                selectTeacherData={this.props.teacherData}
                            />
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
                        showCancelButton= {true}
                        onConfirm={() => {
                            this.props.boundDeleteData(this.props.deleteId, this.props.deleteFrom);
                            this.props.boundHideAlert();
                        }}
                    />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        classData: state.totalData.classData,
        teacherData: state.totalData.teacherData,
        studentData: state.totalData.studentData,
        courseData: state.totalData.courseData,
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