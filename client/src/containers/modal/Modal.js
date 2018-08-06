import React from 'react';
import { connect } from 'react-redux';
import ClassModal from '../../components/modals/classModal/ClassModal';
import TeacherModal from '../../components/modals/teacherModal/TeacherModal';
import StudentModal from '../../components/modals/studentModal/StudentModal';
import EditModal from '../../components/modals/editModal/EditModal';
import DeleteModal from '../../components/modals/deleteModal/DeleteModal';
import MessageModal from '../../components/modals/messageModal/MessageModal';
import { closeModal, addClass, addTeacher, addStudent } from '../../actions/modalAction';
import { getTotalData, deleteAction, editAction } from '../../actions/totalDataAction';
import './Modal.css';

class Modal extends React.Component {

    handleCloseModal = (ev) => {
        this.props.boundCloseModal();
    }

    disableBubbling = (ev) => {
        ev.stopPropagation();
    }

    submitAction = (ev, refs, dataBelongTo) => {
        switch(dataBelongTo) {
            case 'class':
                this.props.boundAddClass(refs);
                break;
            case 'teacher':
                this.props.boundAddTeacher(refs);
                break;
            case 'student':
                this.props.boundAddStudent(refs);
                break;
            default: 
                break;
        }
        ev.preventDefault();        
    }

    handleDelete = (id, dataBelongTo) => {
        this.props.boundDeleteAction(id, dataBelongTo);
    }

    handleEdit = (ev, refs, dataBelongTo, id) => {
        switch(dataBelongTo) {
            case 'class':
                refs = {
                    name: refs.name.value,
                    description: refs.description.value,
                };
                break;
            default:
                refs = {
                    firstname: refs.firstname.value,
                    lastname: refs.lastname.value,
                    age: refs.age.value,
                };
        }
        this.props.boundEditAction(refs, id, dataBelongTo);
        ev.preventDefault();
    }

    render() {
        return (
            <div className='modal-container' onClick={this.handleCloseModal}>
                <div className='modal-box' onClick={this.disableBubbling}>
                    <i className='fas fa-times close-icon' onClick={this.handleCloseModal}></i>
                    <div className='modal-type-container'>
                        {this.props.modalType === 'class' ? <ClassModal handleSubmit={this.submitAction}/> : false}
                        {this.props.modalType === 'teacher' ? <TeacherModal handleSubmit={this.submitAction}/> : false}
                        {this.props.modalType === 'student' ? <StudentModal handleSubmit={this.submitAction}/> : false}
                        {this.props.modalType === 'edit' ? <EditModal data={this.props.data} editAction={this.handleEdit} dataBelongTo={this.props.dataBelongTo}/> : false}
                        {this.props.modalType === 'delete' ? <DeleteModal data={this.props.data} deleteAction={this.handleDelete} dataBelongTo={this.props.dataBelongTo}/> : false}
                        {this.props.message ? 
                        <MessageModal 
                            closeModal={this.handleCloseModal} 
                            message={this.props.message}
                            newTotalCount={this.props.boundNewTotalCount}
                        /> : false}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.modal.data,
        dataBelongTo: state.totalData.dataBelongTo,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundCloseModal: () => dispatch(closeModal()),
        boundAddClass: (refs) => dispatch(addClass(refs)),
        boundAddTeacher: (refs) => dispatch(addTeacher(refs)),
        boundAddStudent: (refs) => dispatch(addStudent(refs)),
        boundNewTotalCount: () => dispatch(getTotalData()),
        boundDeleteAction: (id, dataBelongTo) => dispatch(deleteAction(id, dataBelongTo)),
        boundEditAction: (refs, id, dataBelongTo) => dispatch(editAction(refs, id, dataBelongTo)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);