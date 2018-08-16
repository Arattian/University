import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ClassForm from '../../../components/forms/classForm/ClassForm';
import TeacherForm from '../../../components/forms/teacherForm/TeacherForm';
import StudentForm from '../../../components/forms/studentForm/StudentForm';
import CourseForm from '../../../components/forms/courseForm/CourseForm';
import { editAction } from '../../../actions/editAction';
import { getCurrentItem, dropCurrentItem, getTable } from '../../../actions/tablesAction';
import { dropRedirect } from '../../../actions/redirectAction';
import './EditForm.css';

class EditForm extends React.Component {

    closeForm = (redirectTo) => {
        this.props.history.push(`/admin/${redirectTo}`);
    }
    
    componentDidMount() {
        this.props.redirectId && this.props.boundDropRedirect();
        this.props.boundDropCurrentItem();
        const pageName = this.props.match.params.page;
        if(!this.props.fetched) {
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
        }
    }

    componentDidUpdate() {
        if(!this.props.currentItem) {
            const id = this.props.match.params.id;
            const pageName = this.props.match.params.page;
            id && this.props.boundGetCurrentItem(id, pageName);
        }
    }

    render() {
        const pageName = this.props.match.params.page;
        return (
            <div className='form-container'>
                {pageName === 'classes' ?
                    <ClassForm 
                                closeForm={this.closeForm}
                                itemList={this.props.availableTeachers}
                                currentItem={this.props.currentItem}
                                onSubmit={this.props.boundEditAction}
                    /> :
                    pageName === 'teachers' ?
                    <TeacherForm 
                                closeForm={this.closeForm}
                                currentItem={this.props.currentItem}
                                onSubmit={this.props.boundEditAction}
                    /> :
                    pageName === 'students' ?
                    <StudentForm 
                                closeForm={this.closeForm}
                                itemList={this.props.classList}
                                currentItem={this.props.currentItem}
                                onSubmit={this.props.boundEditAction}
                    /> :
                    <CourseForm 
                                closeForm={this.closeForm}
                                selectClassList={this.props.classList}
                                selectTeacherList={this.props.teacherList}
                                currentItem={this.props.currentItem}
                                onSubmit={this.props.boundEditAction}
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
        classList: state.tables.classList,
        teacherList: state.tables.teacherList,
        studentList: state.tables.studentList,
        courseList: state.tables.courseList,
        currentItem: state.tables.currentItem,
        availableTeachers: state.tables.availableTeachers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundEditAction: (data, id, pageName) => dispatch(editAction(data, id, pageName)),
        boundGetCurrentItem: (id, pageName) => dispatch(getCurrentItem(id, pageName)),
        boundDropCurrentItem: () => dispatch(dropCurrentItem()),
        boundDropRedirect: () => dispatch(dropRedirect()),
        boundGetTable: (tableName) => dispatch(getTable(tableName)),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditForm));