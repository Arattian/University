import React from 'react';
import { connect } from 'react-redux';
import ClassModal from '../../components/classModal/ClassModal';
import TeacherModal from '../../components/teacherModal/TeacherModal';
import StudentModal from '../../components/studentModal/StudentModal';
import Message from '../../components/message/Message';
import { closeModal, addClass, addTeacher, addStudent } from '../../actions/modalAction';
import { getTotalData } from '../../actions/totalDataAction';
import './Modal.css';

class Modal extends React.Component {
    handleCloseModal = (ev) => {
        this.props.boundCloseModal();
    }

    disableBubbling = (ev) => {
        ev.stopPropagation();
    }

    handleSubmit = (ev, refs, whatToAdd) => {
        switch(whatToAdd) {
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

    render() {
        return (
            <div className='modal-container' onClick={this.handleCloseModal}>
                <div className='modal-box' onClick={this.disableBubbling}>
                    <i className='fas fa-times close-icon' onClick={this.handleCloseModal}></i>
                    <div className='modal-type-container'>
                        {this.props.modalType === 'class' ? <ClassModal handleSubmit={this.handleSubmit}/> : false}
                        {this.props.modalType === 'teacher' ? <TeacherModal handleSubmit={this.handleSubmit}/> : false}
                        {this.props.modalType === 'student' ? <StudentModal handleSubmit={this.handleSubmit}/> : false}
                        {this.props.message ? 
                        <Message 
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
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundCloseModal: () => dispatch(closeModal()),
        boundAddClass: (refs) => dispatch(addClass(refs)),
        boundAddTeacher: (refs) => dispatch(addTeacher(refs)),
        boundAddStudent: (refs) => dispatch(addStudent(refs)),
        boundNewTotalCount: () => dispatch(getTotalData()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);