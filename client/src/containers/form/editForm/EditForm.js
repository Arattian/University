import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ClassForm from '../../../components/forms/classForm/ClassForm';
import TeacherForm from '../../../components/forms/teacherForm/TeacherForm';
import StudentForm from '../../../components/forms/studentForm/StudentForm';
import CourseForm from '../../../components/forms/courseForm/CourseForm';
import { editAction } from '../../../actions/editAction';
import { getCurrentData, dropCurrentData, getTotalData } from '../../../actions/totalDataAction';
import { dropRedirect } from '../../../actions/redirectAction';
import './EditForm.css';

class EditForm extends React.Component {

    closeForm = (redirectTo) => {
        this.props.history.push(`/admin/${redirectTo}`);
    }
    
    componentDidMount() {
        this.props.redirectId && this.props.boundDropRedirect();
        this.props.boundDropCurrentData();
    }

    componentDidUpdate() {
        if(this.props.fetched && !this.props.currentData) {
            const id = this.props.match.params.id;
            const getFrom = this.props.match.params.data;
            id && this.props.boundGetCurrentData(id, getFrom);
        }
    }

    render() {
        const dataUrl = this.props.match.params.data;
        return (
            <div className='form-container'>
                {dataUrl === 'classes' ?
                    <ClassForm 
                                closeForm={this.closeForm}
                                selectData={this.props.availableTeachers}
                                currentData={this.props.currentData}
                                boundEditAction={this.props.boundEditAction}
                                boundDropCurrentData={this.props.boundDropCurrentData}
                    /> :
                    dataUrl === 'teachers' ?
                    <TeacherForm 
                                closeForm={this.closeForm}
                                currentData={this.props.currentData}
                                boundEditAction={this.props.boundEditAction}
                                boundDropCurrentData={this.props.boundDropCurrentData}
                    /> :
                    dataUrl === 'students' ?
                    <StudentForm 
                                closeForm={this.closeForm}
                                selectData={this.props.classData}
                                currentData={this.props.currentData}
                                boundEditAction={this.props.boundEditAction}
                                boundDropCurrentData={this.props.boundDropCurrentData}
                    /> :
                    <CourseForm 
                                closeForm={this.closeForm}
                                selectClassData={this.props.classData}
                                selectTeacherData={this.props.teacherData}
                                currentData={this.props.currentData}
                                boundEditAction={this.props.boundEditAction}
                                boundDropCurrentData={this.props.boundDropCurrentData}
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
        classData: state.totalData.classData,
        teacherData: state.totalData.teacherData,
        studentData: state.totalData.studentData,
        courseData: state.totalData.courseData,
        currentData: state.totalData.currentData,
        availableTeachers: state.totalData.availableTeachers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundEditAction: (data, id, editFrom) => dispatch(editAction(data, id, editFrom)),
        boundGetCurrentData: (id, getFrom) => dispatch(getCurrentData(id, getFrom)),
        boundDropCurrentData: () => dispatch(dropCurrentData()),
        boundDropRedirect: () => dispatch(dropRedirect()),
        boundGetTotalData: () => dispatch(getTotalData()),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditForm));