import React from 'react';
import { withRouter } from 'react-router-dom';
import { addStudent } from '../../../actions/addAction';
import { editAction } from '../../../actions/editAction';
import { connect } from 'react-redux';
import { dropCurrentData, getCurrentData } from '../../../actions/totalDataAction';
import '../Forms.css';

class StudentForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: null,
            firstname: '',
            lastname: '',
            age: '',
            classId: ''
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
        this.setState({classId: ev.target.value});
    }

    handleSubmit = (ev, data, andClose) => {
            if(this.state.firstname !== '' &&
                this.state.lastname !== '' &&
                this.state.age !== '' &&
                this.state.classId !== '') {
                    this.state.id ? 
                    this.props.boundEditAction(data, data.id, 'students') :
                    this.props.boundAddStudent(data);
                    andClose && this.props.history.push(`/admin/students`);
        }
        ev.preventDefault();        
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        id && this.props.boundGetCurrentData(id);
    }
    
    componentDidUpdate() {
        if(this.props.currentData) {
            this.setState({
                id: this.props.currentData.id,
                firstname: this.props.currentData.firstname,
                lastname: this.props.currentData.lastname,
                age: this.props.currentData.age,
                classId: this.props.currentData.classId,
            });
            this.props.boundDropCurrentData();
        }
    }

    render() {
        const {selectData, closeForm} = this.props;
        return (
            <form onSubmit={(ev) => this.handleSubmit(ev, this.state)} className='forms-form'>
                <header className='forms-header'>
                    <h2>Student</h2>
                </header>
                <div className='forms-input-container'>
                    <label htmlFor='student-firstname'>
                        <h4>First Name*</h4>
                    </label>
                    <input 
                        className='forms-input-field' 
                        type='text' 
                        placeholder='Enter First Name'
                        name='firstname'
                        id='student-firstname'
                        pattern='[\p{L}]+'
                        value={this.state.firstname}
                        onChange={(ev) => this.handleInputChange(ev, 'firstname')}
                        required
                    />
                </div>
                <div className='forms-input-container'>
                    <label htmlFor='student-lastname'>
                        <h4>Last Name*</h4>
                    </label>
                    <input 
                        className='forms-input-field' 
                        type='text' 
                        placeholder='Enter Last Name'
                        name='lastname'  
                        id='student-lastname' 
                        pattern='[\p{L}]+'
                        value={this.state.lastname}
                        onChange={(ev) => this.handleInputChange(ev, 'lastname')}
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
                                {selectData.map(item => {
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
                    <button type='submit' className='forms-btn'>{this.state.id ? 'Save' : 'Add Student'}</button>
                    <button className='forms-btn' onClick={(ev) => this.handleSubmit(ev, this.state, true)}>{this.state.id ? 'Save and Close' : 'Add and Close'}</button>
                </div>
            </form>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        currentData: state.totalData.currentData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundEditAction: (data, id, editFrom) => dispatch(editAction(data, id, editFrom)),
        boundAddStudent: (data) => dispatch(addStudent(data)),
        boundGetCurrentData: (id) => dispatch(getCurrentData(id, 'students')),
        boundDropCurrentData: () => dispatch(dropCurrentData()),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentForm));