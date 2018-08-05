import React from 'react';
import './TeacherModal.css';

class TeacherModal extends React.Component {
    render() {
        return (
            <form onSubmit={(ev) => this.submit(ev)}>
                <div className='teacher-input-container'>
                    <label htmlFor='teacher-name'>
                        <h4>First Name*</h4>
                    </label>
                    <input className='teacher-input-field' type='text' placeholder='Enter First Name' name='name' ref='teacher-name' id='teacher-name' required/>
                </div>
                <div className='teacher-input-container'>
                    <label htmlFor='teacher-surname'>
                        <h4>Last Name*</h4>
                    </label>
                    <input className='teacher-input-field' type='text' placeholder='Enter Last Name' name='surname' ref='teacher-surname' id='teacher-surname' required/>
                </div>
                <div className='teacher-input-container'>
                    <label htmlFor='teacher-age'>
                        <h4>Age*</h4>
                    </label>
                    <input className='teacher-input-field' type='number' placeholder='Enter Age' name='age' ref='teacher-age' id='teacher-age'  min='20' max='80' required/>
                </div>
                <button type='submit' className='teacher-btn'>Add Teacher</button>
            </form>
        );
    }
}

export default TeacherModal;