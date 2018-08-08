import React from 'react';
import './StudentForm.css';

class StudentForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            age: null,
            studiesAt: null
        }
    }

    handleInputChange = (ev, fieldToChange) => {
        switch(fieldToChange) {
            case 'firstname': {
                this.setState({firstname: ev.target.value});
                break;
            }
            case 'lastname': {
                this.setState({lastname: ev.target.value});
                break;
            }
            case 'age': {
                this.setState({age: ev.target.value});
                break;
            }
            default:
        }
    }

    handleSelectChange = (ev) => {
        this.setState({studiesAt: ev.target.value});
    }

    componentDidMount() {
        this.props.data && this.setState({
            firstname: this.props.data.firstname, 
            lastname: this.props.data.lastname, 
            age: this.props.data.age,
            studiesAt: this.props.data.studiesAt
        });
    }
    
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
                        placeholder='Enter First Name'
                        name='firstname'
                        ref='firstname'
                        id='student-firstname'
                        pattern='[\p{L}]+'
                        value={this.state.firstname}
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
                        placeholder='Enter Last Name'
                        name='lastname' 
                        ref='lastname' 
                        id='student-lastname' 
                        pattern='[\p{L}]+'
                        value={this.state.lastname}
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
                        value={this.state.age} 
                        required
                    />
                </div>
                <button type='submit' className='modal-btn'>{this.props.data ? 'Confirm changes' : 'Add Student'}</button>
            </form>
        );
    }
}

export default StudentForm;