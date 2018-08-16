import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ClassForm from '../../../components/forms/classForm/ClassForm';
import TeacherForm from '../../../components/forms/teacherForm/TeacherForm';
import StudentForm from '../../../components/forms/studentForm/StudentForm';
import CourseForm from '../../../components/forms/courseForm/CourseForm';
import { addAction } from '../../../actions/addAction';
import './AddForm.css';
import { dropCurrentItem, getTable } from '../../../actions/tablesAction';

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
        const pageName = this.props.match.params.page;
        switch(pageName) {
            case 'classes':
                this.props.boundGetTable('classes');
                this.props.boundGetTable('teachers');
                break;
            case 'students':
                this.props.boundGetTable('classes');
                break;
            case 'teachers':
                break;
            case 'courses':
                this.props.boundGetTable('classes');
                this.props.boundGetTable('teachers');
                break;
            default:
        }
        this.props.boundDropCurrentItem();
    }

    render() {
        const pageName = this.props.match.params.page;
        return (
            <div className='form-container'>
                {pageName === 'classes' ?
                    <ClassForm 
                                closeForm={this.closeForm}
                                onSubmit={this.props.boundAddAction}
                                itemList={this.props.availableTeachers}
                    /> :
                    pageName === 'teachers' ?
                    <TeacherForm 
                                closeForm={this.closeForm}
                                onSubmit={this.props.boundAddAction}
                    /> :
                    pageName === 'students' ?
                    <StudentForm 
                                closeForm={this.closeForm}
                                itemList={this.props.classList}
                                onSubmit={this.props.boundAddAction}
                    /> :
                    <CourseForm 
                                closeForm={this.closeForm}
                                selectClassList={this.props.classList}
                                selectTeacherList={this.props.teacherList}
                                onSubmit={this.props.boundAddAction}
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fetched: state.tables.fetched,
        redirectId: state.redirect.redirectId,
        redirectTo: state.redirect.redirectTo,
        classList: state.tables.classList,
        teacherList: state.tables.teacherList,
        studentList: state.tables.studentList,
        courseList: state.tables.courseList,
        availableTeachers: state.tables.availableTeachers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundAddAction: (data, pageName, needToRedirect) => dispatch(addAction(data, pageName, needToRedirect)),
        boundGetTable: (tableName) => dispatch(getTable(tableName)),
        boundDropCurrentItem: () => dispatch(dropCurrentItem()),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddForm));