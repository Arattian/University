import React from 'react';
import './StudentModal.css';

class StudentModal extends React.Component {
    render() {
        return (
            <form onSubmit={(ev) => this.submit(ev)}>
                <div className='student-input-container'>
                    <label htmlFor='student-name'>
                        <h4>First Name*</h4>
                    </label>
                    <input className='student-input-field' type='text' placeholder='Enter First Name' name='name' ref='student-name' id='student-name' required/>
                </div>
                <div className='student-input-container'>
                    <label htmlFor='student-surname'>
                        <h4>Last Name*</h4>
                    </label>
                    <input className='student-input-field' type='text' placeholder='Enter Last Name' name='surname' ref='student-surname' id='student-surname' required/>
                </div>
                <div className='student-input-container'>
                    <label htmlFor='student-age'>
                        <h4>Age*</h4>
                    </label>
                    <input className='student-input-field' type='number' placeholder='Enter Age' name='age' ref='student-age' id='student-age'  min='16' max='80' required/>
                </div>
                <button type='submit' className='student-btn'>Add Student</button>
            </form>
        );
    }
}

export default StudentModal;