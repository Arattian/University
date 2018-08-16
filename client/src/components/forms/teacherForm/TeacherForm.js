import React from 'react';
import './TeacherForm.css';

class TeacherForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: null,
            firstName: '',
            lastName: '',
            age: '',
        }
    }

    handleInputChange = (ev, fieldToChange) => {
        this.setState({[fieldToChange]: ev.target.value});
    }

    validateInput = () => {
        return this.state.firstName !== '' &&
                this.state.lastName !== '' &&
                this.state.age !== '' &&
                this.state.classId !== '';
    }

    handleSubmit = (ev, data, redirect) => {
        if(this.validateInput()) {
                if(this.state.id) {
                    this.props.onSubmit(data, data.id, 'teachers');
                    redirect && this.props.closeForm('teachers'); 
                } else if (redirect) {
                    this.props.onSubmit(data, 'teachers', redirect);
                } else {
                    this.props.onSubmit(data, 'teachers');
                    this.setState({
                        firstName: '',
                        lastName: '',
                        age: '',
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
            });
        }
    }

    render() {
        const {closeForm} = this.props;
        return (
            <form onSubmit={(ev) => this.handleSubmit(ev, this.state)} className='forms-form'>
                <header className='forms-header'>
                    <h2>Teacher</h2>
                </header>
                <div className='forms-input-container'>
                    <label htmlFor='teacher-firstName'>
                        <h4>First Name*</h4>
                    </label>
                    <input 
                        className='forms-input-field'
                        type='text'
                        placeholder='Enter First Name'
                        name='firstName'
                        id='teacher-firstName'
                        pattern='[\p{L}]+'
                        value={this.state.firstName}
                        onChange={(ev) => this.handleInputChange(ev, 'firstName')}
                        required
                        />
                </div>
                <div className='forms-input-container'>
                    <label htmlFor='teacher-lastName'>
                        <h4>Last Name*</h4>
                    </label>
                    <input 
                        className='forms-input-field'
                        type='text'
                        placeholder='Enter Last Name'
                        name='lastName' 
                        id='teacher-lastName'
                        pattern='[\p{L}]+'
                        value={this.state.lastName}
                        onChange={(ev) => this.handleInputChange(ev, 'lastName')}
                        required
                        />
                </div>
                <div className='forms-input-container'>
                    <label htmlFor='teacher-age'>
                        <h4>Age*</h4>
                    </label>
                    <input 
                        className='forms-input-field'
                        type='number'
                        placeholder='Enter Age'
                        name='age'
                        id='teacher-age'
                        min='20'
                        max='80'
                        value={this.state.age}
                        onChange={(ev) => this.handleInputChange(ev, 'age')}
                        required
                    />
                </div>
                <div className='forms-btn-container'>
                    <button className='forms-btn' onClick={() => closeForm('teachers')}>Close</button>
                    <button type='submit' className='forms-btn'>{this.state.id ? 'Save' : 'Add and Create New'}</button>
                    <button className='forms-btn' onClick={(ev) => this.handleSubmit(ev, this.state, true)}>{this.state.id ? 'Save and Close' : 'Add Teacher'}</button>
                </div>
            </form>
        );
    }
}

export default TeacherForm;