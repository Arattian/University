import React from 'react';
import './TeacherModal.css';

class TeacherModal extends React.Component {
    render() {
        return (
            <form onSubmit={(ev) => {
                this.props.data ? this.props.handleSubmit(ev, this.refs, 'teacher', this.props.data.id) : this.props.handleSubmit(ev, this.refs, 'teacher')
            }}>
                <div className='modal-input-container'>
                    <label htmlFor='teacher-firstname'>
                        <h4>First Name*</h4>
                    </label>
                    <input 
                        className='modal-input-field'
                        type='text'
                        placeholder={this.props.data ? this.props.data.firstname : 'Enter First Name'}
                        name='firstname'
                        ref='firstname'
                        id='teacher-firstname'
                        pattern='[\p{L}]+'
                        required
                        />
                </div>
                <div className='modal-input-container'>
                    <label htmlFor='teacher-lastname'>
                        <h4>Last Name*</h4>
                    </label>
                    <input 
                        className='modal-input-field'
                        type='text'
                        placeholder={this.props.data ? this.props.data.lastname : 'Enter Last Name'}
                        name='lastname' 
                        ref='lastname' 
                        id='teacher-lastname'
                        pattern='[\p{L}]+'
                        required
                        />
                </div>
                <div className='modal-input-container'>
                    <label htmlFor='teacher-age'>
                        <h4>Age*</h4>
                    </label>
                    <input 
                        className='modal-input-field'
                        type='number'
                        placeholder={this.props.data ? this.props.data.age : 'Enter Age'}
                        name='age'
                        ref='age'
                        id='teacher-age'
                        min='20'
                        max='80'
                        required
                    />
                </div>
                <button type='submit' className='modal-btn'>{this.props.data ? 'Confirm changes' : 'Add Teacher'}</button>
            </form>
        );
    }
}

export default TeacherModal;