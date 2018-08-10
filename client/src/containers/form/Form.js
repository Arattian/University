import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ClassForm from '../../components/forms/classForm/ClassForm';
import TeacherForm from '../../components/forms/teacherForm/TeacherForm';
import StudentForm from '../../components/forms/studentForm/StudentForm';
import CourseForm from '../../components/forms/courseForm/CourseForm';
import { addAction } from '../../actions/addAction';
import { editAction } from '../../actions/editAction';
import { getCurrentData, dropCurrentData } from '../../actions/totalDataAction';
import './Form.css';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            availableTeachers: [],
        }
    }

    getAvailableTeachers = () => {
        let teachers = this.props.teacherData;
        let classes = this.props.classData;
        const availableTeachers = [];
        for (let i=0; i < teachers.length; ++i){
            let matched = false;
            for(let j=0; j < classes.length; ++j){
                if(teachers[i].id === classes[j].Teacher.id){
                    matched = true;
                }
            }
            if(!matched){
                availableTeachers.push(teachers[i]);
            }
        }
        this.setState({availableTeachers});
    }

    closeForm = (redirectTo) => {
        this.props.history.push(`/admin/${redirectTo}`);
    }
    
    componentDidMount() {
        const id = this.props.match.params.id;
        const getFrom = this.props.match.params.data;
        id && this.props.boundGetCurrentData(id, getFrom);
        getFrom === 'classes' && this.getAvailableTeachers();
    }

    componentDidUpdate() {
        if(this.props.currentData && this.state.availableTeachers !== []) {
            const availableTeachers = [...this.state.availableTeachers];
            availableTeachers.unshift(this.props.currentData.Teacher);
            this.setState({availableTeachers});
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
                                selectData={this.state.availableTeachers}
                                currentData={this.props.currentData}
                                boundAddAction={this.props.boundAddAction}
                                boundEditAction={this.props.boundEditAction}
                                boundDropCurrentData={this.props.boundDropCurrentData}
                    /> :
                    dataUrl === 'teachers' ?
                    <TeacherForm 
                                closeForm={this.closeForm}
                                currentData={this.props.currentData}
                                boundAddAction={this.props.boundAddAction}
                                boundEditAction={this.props.boundEditAction}
                                boundDropCurrentData={this.props.boundDropCurrentData}
                    /> :
                    dataUrl === 'students' ?
                    <StudentForm 
                                closeForm={this.closeForm}
                                selectData={this.props.classData}
                                currentData={this.props.currentData}
                                boundAddAction={this.props.boundAddAction}
                                boundEditAction={this.props.boundEditAction}
                                boundDropCurrentData={this.props.boundDropCurrentData}
                    /> :
                    <CourseForm 
                                closeForm={this.closeForm}
                                selectClassData={this.props.classData}
                                selectTeacherData={this.props.teacherData}
                                currentData={this.props.currentData}
                                boundAddAction={this.props.boundAddAction}
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
        classData: state.totalData.classData,
        teacherData: state.totalData.teacherData,
        studentData: state.totalData.studentData,
        courseData: state.totalData.courseData,
        currentData: state.totalData.currentData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundEditAction: (data, id, editFrom) => dispatch(editAction(data, id, editFrom)),
        boundAddAction: (data, addTo) => dispatch(addAction(data, addTo)),
        boundGetCurrentData: (id, getFrom) => dispatch(getCurrentData(id, getFrom)),
        boundDropCurrentData: () => dispatch(dropCurrentData()),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));