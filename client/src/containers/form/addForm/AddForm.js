import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ClassForm from '../../../components/forms/classForm/ClassForm';
import TeacherForm from '../../../components/forms/teacherForm/TeacherForm';
import StudentForm from '../../../components/forms/studentForm/StudentForm';
import CourseForm from '../../../components/forms/courseForm/CourseForm';
import { addAction } from '../../../actions/addAction';
import './AddForm.css';
import { getTotalData, dropCurrentData } from '../../../actions/totalDataAction';

class AddForm extends React.Component {

    closeForm = (redirectTo) => {
        this.props.history.push(`/admin/${redirectTo}`);
    }

    componentDidUpdate() {
        if(this.props.redirectId) {
            this.props.history.push(`/admin/${this.props.redirectTo}/edit/${this.props.redirectId}`);
        }
    }

    componentDidMount() {
        if(!this.props.fetched) {
            this.props.boundGetTotalData();
        }
        this.props.boundDropCurrentData();
    }

    render() {
        const dataUrl = this.props.match.params.data;
        return (
            <div className='form-container'>
                {dataUrl === 'classes' ?
                    <ClassForm 
                                closeForm={this.closeForm}
                                boundAddAction={this.props.boundAddAction}
                                selectData={this.props.availableTeachers}
                    /> :
                    dataUrl === 'teachers' ?
                    <TeacherForm 
                                closeForm={this.closeForm}
                                boundAddAction={this.props.boundAddAction}
                    /> :
                    dataUrl === 'students' ?
                    <StudentForm 
                                closeForm={this.closeForm}
                                selectData={this.props.classData}
                                boundAddAction={this.props.boundAddAction}
                    /> :
                    <CourseForm 
                                closeForm={this.closeForm}
                                selectClassData={this.props.classData}
                                selectTeacherData={this.props.teacherData}
                                boundAddAction={this.props.boundAddAction}
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fetched: state.totalData.fetched,
        redirectId: state.redirect.redirectId,
        redirectTo: state.redirect.redirectTo,
        classData: state.totalData.classData,
        teacherData: state.totalData.teacherData,
        studentData: state.totalData.studentData,
        courseData: state.totalData.courseData,
        availableTeachers: state.totalData.availableTeachers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundAddAction: (data, addTo, needToRedirect) => dispatch(addAction(data, addTo, needToRedirect)),
        boundGetTotalData: () => dispatch(getTotalData()),
        boundDropCurrentData: () => dispatch(dropCurrentData()),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddForm));