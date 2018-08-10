import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ClassData from '../../components/datas/classData/ClassData';
import TeacherData from '../../components/datas/teacherData/TeacherData';
import StudentData from '../../components/datas/studentData/StudentData';
import CourseData from '../../components/datas/courseData/CourseData';
import './Data.css';

class Data extends React.Component {

    handleEditRedirect = (id, belongTo) => {
        this.props.history.push(`/admin/${belongTo}/edit/${id}`)
    }

    handleDelete = (id, deleteFrom) => {
        this.props.boundShowDelete(id, deleteFrom);
    }

    render() {
        const dataUrl = this.props.match.params.data;
        return (
            <div className='data-main'>
                    {dataUrl === 'classes' ? 
                        <ClassData 
                            data={this.props.classData}
                            handleEditRedirect={this.handleEditRedirect}
                            handleDelete={this.handleDelete}
                        /> :
                    dataUrl === 'students' ?
                        <StudentData 
                            data={this.props.studentData} 
                            handleEditRedirect={this.handleEditRedirect}
                            handleDelete={this.handleDelete}
                        /> :
                    dataUrl === 'teachers' ?
                        <TeacherData 
                            data={this.props.teacherData}
                            handleEditRedirect={this.handleEditRedirect}
                            handleDelete={this.handleDelete}
                        /> :
                        <CourseData 
                            data={this.props.courseData}
                            handleEditRedirect={this.handleEditRedirect}
                            handleDelete={this.handleDelete}
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
    }
}

export default withRouter(connect(mapStateToProps)(Data));