import React from 'react';
import './CourseForm.css';

class CourseForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: null,
            name: '',
            start: '',
            end: '',
            startTime: '',
            endTime: '',
            teacherId: '',
            classId: '',
        }
    }

    handleInputChange = (ev, fieldToChange) => {
        this.setState({[fieldToChange]: ev.target.value});
    }

    
    handleSelectChange = (ev, fieldToChange) => {
        switch(fieldToChange) {
            case 'teacherId': {
                this.setState({teacherId: ev.target.value});
                break;
            }
            case 'classId': {
                this.setState({classId: ev.target.value});
                break;
            }
            default:
        }

    }

    validateInput = () => {
        return this.state.name !== '' &&
                this.state.start !== '' &&
                this.state.end !== '' &&
                this.state.startTime !== '' &&
                this.state.endTime !== '' &&
                this.state.teacherId !== '' &&
                this.state.classId !== '';
    }

    handleSubmit = (ev, data, redirect) => {
        if(this.validateInput()) {
                if(this.state.id) {
                    this.props.onSubmit(data, data.id, 'courses');
                    redirect && this.props.closeForm('courses'); 
                } else if (redirect) {
                    this.props.onSubmit(data, 'courses', redirect);
                } else {
                    this.props.onSubmit(data, 'courses');
                    this.setState({
                        name: '',
                        start: '',
                        end: '',
                        startTime: '',
                        endTime: '',
                        teacherId: '',
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
                name: this.props.currentItem.name,
                start: this.props.currentItem.start,
                end: this.props.currentItem.end,
                startTime: this.props.currentItem.startTime,
                endTime: this.props.currentItem.endTime,
                teacherId: this.props.currentItem.teacherId,
                classId: this.props.currentItem.classId,
            });
        }
    }

    render() {
        const {selectClassList, selectTeacherList, closeForm} = this.props;
        return (
            <form onSubmit={(ev) => this.handleSubmit(ev, this.state)} className='course-form'>
                <header className='forms-header'>
                    <h2>Course</h2>
                </header>
                <div className='forms-input-container'>
                    <label htmlFor='course-name'>
                        <h4>Name*</h4>
                    </label>
                    <input 
                        className='forms-input-field' 
                        type='text' 
                        placeholder='Enter Name'
                        name='name'
                        id='course-name'
                        pattern='[\p{L}]+'
                        value={this.state.name}
                        onChange={(ev) => this.handleInputChange(ev, 'name')}
                        required
                    />
                </div>
                
                <div className='forms-input-container'>
                        <label>
                            <h4>Teacher*</h4>
                        </label>
                        <div className="select">
                            <select name="slct-teacher" required value={this.state.teacherId} onChange={(ev) => this.handleSelectChange(ev, 'teacherId')}>
                                {!this.state.id && <option value='' default> Choose an option </option>}
                                {selectTeacherList.map(item => {
                                    return (
                                        <option 
                                        value={item.id}
                                        key={'#'+Math.floor(Math.random()*16777215).toString(16)}
                                        >
                                            {`${item.firstName} ${item.lastName}`}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                </div>
                <div className='forms-input-container'>
                        <label>
                            <h4>Class*</h4>
                        </label>
                        <div className="select">
                            <select name="slct-class" required value={this.state.classId} onChange={(ev) => this.handleSelectChange(ev, 'classId')}>
                                {!this.state.id && <option value='' default> Choose an option </option>}
                                {selectClassList.map(item => {
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
                <div className='forms-input-container'>
                    <label htmlFor='course-start'>
                        <h4>Start Date*</h4>
                    </label>
                    <input 
                        className='forms-input-field' 
                        type='date' 
                        name='start'  
                        id='course-start'
                        min="2018-01-01" 
                        max="2022-12-31"  
                        value={this.state.start}
                        onChange={(ev) => this.handleInputChange(ev, 'start')} 
                        required
                    />
                </div>
                <div className='forms-input-container'>
                    <label htmlFor='course-end'>
                        <h4>End Date*</h4>
                    </label>
                    <input 
                        className='forms-input-field' 
                        type='date' 
                        name='end'  
                        id='course-end' 
                        min="2018-01-01" 
                        max="2022-12-31"  
                        value={this.state.end}
                        onChange={(ev) => this.handleInputChange(ev, 'end')} 
                        required
                    />
                </div>
                <div className='forms-input-container'>
                    <label htmlFor='course-start-time'>
                        <h4>Start Time*</h4>
                    </label>
                    <input 
                        className='forms-input-field' 
                        type='time' 
                        name='start-time' 
                        id='course-start-time' 
                        pattern='[\p{L}]+'
                        value={this.state.startTime}
                        onChange={(ev) => this.handleInputChange(ev, 'startTime')}
                        required
                    />
                </div>
                <div className='forms-input-container'>
                    <label htmlFor='course-end-time'>
                        <h4>End Time*</h4>
                    </label>
                    <input 
                        className='forms-input-field' 
                        type='time' 
                        name='end-time' 
                        id='course-end-time'  
                        value={this.state.endTime}
                        onChange={(ev) => this.handleInputChange(ev, 'endTime')} 
                        required
                    />
                </div>
                <div className='forms-btn-container'>
                    <button className='forms-btn' onClick={() => closeForm('courses')}>Close</button>
                    <button type='submit' className='forms-btn'>{this.state.id ? 'Save' : 'Add and Create New'}</button>
                    <button className='forms-btn' onClick={(ev) => this.handleSubmit(ev, this.state, true)}>{this.state.id ? 'Save and Close' : 'Add Course'}</button>
                </div>
            </form>
        );
    }
}


export default CourseForm;