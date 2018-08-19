import React from 'react';
import './StudentForm.css';

class StudentForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: null,
            firstName: '',
            lastName: '',
            age: '',
            classId: ''
        }
    }

    handleInputChange = (ev, fieldToChange) => {
        this.setState({[fieldToChange] : ev.target.value});
    }

    handleSelectChange = (ev) => {
        this.setState({classId: ev.target.value});
    }

    validateInput = () => {
        return this.state.firstName !== '' &&
                this.state.lastName !== '' &&
                this.state.age !== '' &&
                this.state.classId !== '' &&
                this.state.classId !== null;
    }

    handleSubmit = (ev, data, redirect) => {
            if(this.validateInput()) {
                    if(this.state.id) {
                        this.props.onSubmit(data, data.id, 'students');
                        redirect && this.props.closeForm('students'); 
                    } else if (redirect) {
                        this.props.onSubmit(data, 'students', redirect);
                    } else {
                        this.props.onSubmit(data, 'students');
                        this.setState({
                            firstName: '',
                            lastName: '',
                            age: '',
                            classId: '',
                        });
                    }
        }
        ev.preventDefault();        
    }

    componentDidUpdate() {
        if(this.props.currentItem && !this.state.id) {
            this.setState({
                id: this.props.currentItem.id,
                firstName: this.props.currentItem.firstName,
                lastName: this.props.currentItem.lastName,
                age: this.props.currentItem.age,
                classId: this.props.currentItem.classId,
            });
        }
    }

    render() {
        const {itemList, closeForm} = this.props;
        return (
            <form onSubmit={(ev) => this.handleSubmit(ev, this.state)} className='forms-form'>
                <header className='forms-header'>
                    <h2>Student</h2>
                </header>
                <div className='forms-input-container'>
                    <label htmlFor='student-firstName'>
                        <h4>First Name*</h4>
                    </label>
                    <input 
                        className='forms-input-field' 
                        type='text' 
                        placeholder='Enter First Name'
                        name='firstName'
                        id='student-firstName'
                        pattern='[\p{L}]+'
                        value={this.state.firstName}
                        onChange={(ev) => this.handleInputChange(ev, 'firstName')}
                        required
                    />
                </div>
                <div className='forms-input-container'>
                    <label htmlFor='student-lastName'>
                        <h4>Last Name*</h4>
                    </label>
                    <input 
                        className='forms-input-field' 
                        type='text' 
                        placeholder='Enter Last Name'
                        name='lastName'  
                        id='student-lastName' 
                        pattern='[\p{L}]+'
                        value={this.state.lastName}
                        onChange={(ev) => this.handleInputChange(ev, 'lastName')}
                        required
                    />
                </div>
                <div className='forms-input-container'>
                    <label htmlFor='student-age'>
                        <h4>Age*</h4>
                    </label>
                    <input 
                        className='forms-input-field' 
                        type='number' 
                        placeholder='Enter Age'
                        name='age' 
                        id='student-age'  
                        min='16' 
                        max='80'
                        value={this.state.age}
                        onChange={(ev) => this.handleInputChange(ev, 'age')} 
                        required
                    />
                </div>
                <div className='forms-input-container'>
                        <label>
                            <h4>Class*</h4>
                        </label>
                        <div className="select">
                            <select name="slct" required value={this.state.classId} onChange={this.handleSelectChange}>
                                {!this.state.id && <option value='' default> Choose an option </option>}
                                {itemList.map(item => {
                                    return (
                                        <option 
                                        value={item.id}
                                        key={'#'+Math.floor(Math.random()*16777215).toString(16)}
                                        >
                                            {`${item.name}`}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                <div className='forms-btn-container'>
                    <button className='forms-btn' onClick={() => closeForm('students')}>Close</button>
                    <button type='submit' className='forms-btn'>{this.state.id ? 'Save' : 'Add and Create New'}</button>
                    <button className='forms-btn' onClick={(ev) => this.handleSubmit(ev, this.state, true)}>{this.state.id ? 'Save and Close' : 'Add Student'}</button>
                </div>
            </form>
        );
    }
}

export default StudentForm;