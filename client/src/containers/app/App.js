import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Home from '../../components/home/Home';
import ClassData from '../data/classData/ClassData';
import TeacherData from '../data/classData/ClassData';
import StudentData from '../data/classData/ClassData';
import ClassForm from '../forms/classForm/ClassForm';
import TeacherForm from '../forms/teacherForm/TeacherForm';
import StudentForm from '../forms/studentForm/StudentForm';
import { getTotalData } from '../../actions/totalDataAction';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            formData: null,
        }
    }

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

    handleEditRedirect = (item, belongTo) => {
        this.props.history.push(`/admin/${belongTo}/edit/${item.id}`)
        this.setState({formData: item});
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
                            />
                        </Route>
                        <Route exact path='/admin/classes'>
                            <ClassData data={this.props.classData} handleEditRedirect={this.handleEditRedirect}/>
                        </Route>
                        <Route exact path='/admin/teachers'>
                            <TeacherData data={this.props.teacherData} handleEditRedirect={this.handleEditRedirect}/>
                        </Route>
                        <Route exact path='/admin/students'>
                            <StudentData data={this.props.studentData} handleEditRedirect={this.handleEditRedirect}/>
                        </Route>
                        <Route exact path='/admin/courses'>
                        </Route>
                        <Route exact path='/admin/classes/edit/:id'>
                            <ClassForm defaultData={this.state.formData} selectData={this.props.teacherData} closeForm={this.closeForm}/>
                        </Route>
                        <Route exact path='/admin/teachers/edit/:id'>
                            <TeacherForm defaultData={this.state.formData}/>
                        </Route>
                        <Route exact path='/admin/students/edit/:id'>
                            <StudentForm defaultData={this.state.formData}/>
                        </Route>
                        <Route exact path='/admin/classes/add'>
                            <ClassForm selectData={this.props.teacherData} closeForm={this.closeForm}/>
                        </Route>
                        <Route exact path='/admin/teachers/add'>
                            <TeacherForm />
                        </Route>
                        <Route exact path='/admin/students/add'>
                            <StudentForm />
                        </Route>
                    </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        classData: state.totalData.classData,
        teacherData: state.totalData.teacherData,
        studentData: state.totalData.studentData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundGetTotalData: () => dispatch(getTotalData()),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));