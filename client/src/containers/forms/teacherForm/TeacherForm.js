import React from 'react';
import './TeacherForm.css';

class TeacherForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            age: '',
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

    handleSubmit = (ev, data, actionType, id) => {
        actionType === 'edit' ? this.props.boundEditTeacher(data, id) : this.props.boundAddTeacher(data);
        ev.preventDefault();        
    }


    componentDidMount() {
        this.props.defaultData && this.setState({
            firstname: this.props.defaultData.firstname, 
            lastname: this.props.defaultData.lastname, 
            age: this.props.defaultData.age,
        });
    }

    render() {
        return (
            <form onSubmit={(ev) => {
                this.props.defaultData ? this.handleSubmit(ev, this.state, 'edit', this.props.defaultData.id) : this.handleSubmit(ev, this.state, 'add')
            }}>
                <div className='modal-input-container'>
                    <label htmlFor='teacher-firstname'>
                        <h4>First Name*</h4>
                    </label>
                    <input 
                        className='modal-input-field'
                        type='text'
                        placeholder='Enter First Name'
                        name='firstname'
                        ref='firstname'
                        id='teacher-firstname'
                        pattern='[\p{L}]+'
                        value={this.state.firstname}
                        onChange={(ev) => this.handleInputChange(ev, 'firstname')}
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
                        placeholder='Enter Last Name'
                        name='lastname' 
                        ref='lastname' 
                        id='teacher-lastname'
                        pattern='[\p{L}]+'
                        value={this.state.lastname}
                        onChange={(ev) => this.handleInputChange(ev, 'lastname')}
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
                        value={this.state.age}
                        onChange={(ev) => this.handleInputChange(ev, 'age')}
                        required
                    />
                </div>
                <button type='submit' className='modal-btn'>{this.props.defaultData ? 'Confirm changes' : 'Add Teacher'}</button>
            </form>
        );
    }
}

export default TeacherForm;