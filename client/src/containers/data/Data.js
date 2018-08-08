import React from 'react';
import { connect } from 'react-redux';
import ClassData from '../../components/datas/classData/ClassData';
import TeacherData from '../../components/datas/teacherData/TeacherData';
import StudentData from '../../components/datas/studentData/StudentData';
import { setDataBelong } from '../../actions/totalDataAction';
import { editModal, deleteModal } from '../../actions/modalAction';
import './Data.css';

class Data extends React.Component {

    handleEdit = (item, dataBelongTo) => {
        this.props.boundEditModal(item, dataBelongTo);
    }

    handleDelete = (item, dataBelongTo) => {
        this.props.boundDeleteModal(item, dataBelongTo);
    }

    componentDidMount() {
        this.props.boundDataBelong(this.props.dataBelongTo);
    }

    render() {
        return (
            <div className='data-main'>
                <header>
                    <h2>{this.props.dataBelongTo[0].toUpperCase() + this.props.dataBelongTo.slice(1)}</h2>
                </header>
                {this.props.dataBelongTo === 'class' ?
                     <ClassData data={this.props.data} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/> :
                      this.props.dataBelongTo === 'teacher' ?
                      <TeacherData data={this.props.data} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/> :
                      <StudentData data={this.props.data} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.modal.message,
        classData: state.totalData.classData,
        teacherData: state.totalData.teacherData,
        studentData: state.totalData.studentData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundEditModal: (content) => dispatch(editModal(content)),
        boundDeleteModal: (content) => dispatch(deleteModal(content)),
        boundDataBelong: (dataBelongTo) => dispatch(setDataBelong(dataBelongTo)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Data);