import React from 'react';
import './StudentModal.css';

class StudentModal extends React.Component {
    render() {
        return (
            <form onSubmit={(ev) => {
                this.props.data ? this.props.handleSubmit(ev, this.refs, 'student', this.props.data.id) : this.props.handleSubmit(ev, this.refs, 'student')
            }}>
                <div className='modal-input-container'>
                    <label htmlFor='student-firstname'>
                        <h4>First Name*</h4>
                    </label>
                    <input 
                        className='modal-input-field' 
                        type='text' 
                        placeholder={this.props.data ? this.props.data.firstname : 'Enter First Name'}
                        name='firstname'
                        ref='firstname'
                        id='student-firstname'
                        pattern='[\p{L}]+'
                        required
                    />
                </div>
                <div className='modal-input-container'>
                    <label htmlFor='student-lastname'>
                        <h4>Last Name*</h4>
                    </label>
                    <input 
                        className='modal-input-field' 
                        type='text' 
                        placeholder={this.props.data ? this.props.data.lastname : 'Enter Last Name'}
                        name='lastname' 
                        ref='lastname' 
                        id='student-lastname' 
                        pattern='[\p{L}]+'
                        required
                    />
                </div>
                <div className='modal-input-container'>
                    <label htmlFor='student-age'>
                        <h4>Age*</h4>
                    </label>
                    <input 
                        className='modal-input-field' 
                        type='number' 
                        placeholder={this.props.data ? this.props.data.age : 'Enter Age'}
                        name='age' 
                        ref='age' 
                        id='student-age'  
                        min='16' 
                        max='80' 
                        required
                    />
                </div>
                <button type='submit' className='modal-btn'>{this.props.data ? 'Confirm changes' : 'Add Student'}</button>
            </form>
        );
    }
}

export default StudentModal;