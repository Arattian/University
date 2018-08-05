import React from 'react';
import { connect } from 'react-redux';
import ClassModal from '../../components/classModal/ClassModal';
import TeacherModal from '../../components/teacherModal/TeacherModal';
import StudentModal from '../../components/studentModal/StudentModal';
import { closeModal, showModal } from '../../actions/modalAction';
import './Modal.css';

class Modal extends React.Component {
    handleCloseModal = (ev) => {
        this.props.boundCloseModal();
    }

    disableBubbling = (ev) => {
        ev.stopPropagation();
    }

    render() {
        return (
            <div className='modal-container' onClick={this.handleCloseModal}>
                <div className='modal-box' onClick={this.disableBubbling}>
                    <i class='fas fa-times close-icon' onClick={this.handleCloseModal}></i>
                    {this.props.modalType === 'class' ? <ClassModal /> : false}
                    {this.props.modalType === 'teacher' ? <TeacherModal /> : false}
                    {this.props.modalType === 'student' ? <StudentModal /> : false}
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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);