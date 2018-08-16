import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ClassTable from '../../components/tables/classTable/ClassTable';
import TeacherTable from '../../components/tables/teacherTable/TeacherTable';
import StudentTable from '../../components/tables/studentTable/StudentTable';
import CourseTable from '../../components/tables/courseTable/CourseTable';
import { getTable } from '../../actions/tablesAction';
import './TableWrapper.css';

class TableWrapper extends React.Component {

    handleEditRedirect = (id, belongTo) => {
        this.props.history.push(`/admin/${belongTo}/edit/${id}`)
    }

    handleDelete = (id, deleteFrom) => {
        this.props.boundShowDelete(id, deleteFrom);
    }

    componentDidMount() {
        const pageName = this.props.match.params.page;
        this.props.boundGetTable(pageName);
    }

    render() {
        const pageName = this.props.match.params.page;
        return (
            <div className='data-main'>
                    {pageName === 'classes' ? 
                        <ClassTable 
                            table={this.props.classList}
                            handleEditRedirect={this.handleEditRedirect}
                            handleDelete={this.handleDelete}
                        /> :
                    pageName === 'students' ?
                        <StudentTable 
                            table={this.props.studentList} 
                            handleEditRedirect={this.handleEditRedirect}
                            handleDelete={this.handleDelete}
                        /> :
                    pageName === 'teachers' ?
                        <TeacherTable 
                            table={this.props.teacherList}
                            handleEditRedirect={this.handleEditRedirect}
                            handleDelete={this.handleDelete}
                        /> :
                        <CourseTable 
                            table={this.props.courseList}
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
        classList: state.tables.classList,
        teacherList: state.tables.teacherList,
        studentList: state.tables.studentList,
        courseList: state.tables.courseList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundGetTable: (tableName) => dispatch(getTable(tableName)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TableWrapper));