import React from 'react';
import './StudentModal.css';

class StudentModal extends React.Component {
    render() {
        return (
            <form onSubmit={(ev) => this.props.handleSubmit(ev, this.refs, 'student')}>
                <div className='student-input-container'>
                    <label htmlFor='student-firstname'>
                        <h4>First Name*</h4>
                    </label>
                    <input 
                        className='student-input-field' 
                        type='text' 
                        placeholder='Enter First Name'
                        name='firstname'
                        ref='firstname'
                        id='student-firstname'
                        pattern='[\p{L}]+'
                        required
                    />
                </div>
                <div className='student-input-container'>
                    <label htmlFor='student-lastname'>
                        <h4>Last Name*</h4>
                    </label>
                    <input 
                        className='student-input-field' 
                        type='text' 
                        placeholder='Enter Last Name' 
                        name='lastname' 
                        ref='lastname' 
                        id='student-lastname' 
                        pattern='[\p{L}]+'
                        required
                    />
                </div>
                <div className='student-input-container'>
                    <label htmlFor='student-age'>
                        <h4>Age*</h4>
                    </label>
                    <input 
                        className='student-input-field' 
                        type='number' 
                        placeholder='Enter Age' 
                        name='age' 
                        ref='age' 
                        id='student-age'  
                        min='16' 
                        max='80' 
                        required
                    />
                </div>
                <button type='submit' className='student-btn'>Add Student</button>
            </form>
        );
    }
}

export default StudentModal;