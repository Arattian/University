import React from 'react';
import { withRouter } from 'react-router-dom';
import { addCourse } from '../../../actions/addAction';
import { editAction } from '../../../actions/editAction';
import { connect } from 'react-redux';
import { getCurrentData, dropCurrentData } from '../../../actions/totalDataAction';
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
        switch(fieldToChange) {
            case 'name': {
                this.setState({name: ev.target.value});
                break;
            }
            case 'startTime': {
                this.setState({startTime: ev.target.value});
                break;
            }
            case 'endTime': {
                this.setState({endTime: ev.target.value});
                break;
            }
            case 'start': {
                this.setState({start: ev.target.value});
                break;
            }
            case 'end': {
                this.setState({end: ev.target.value});
                break;
            }
            default:
        }
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

    handleSubmit = (ev, data, andClose) => {
        if(this.state.name !== '' &&
            this.state.start !== '' &&
            this.state.end !== '' &&
            this.state.startTime !== '' &&
            this.state.endTime !== '' &&
            this.state.teacherId !== '' &&
            this.state.classId !== '') {
                this.state.id ? 
                this.props.boundEditAction(data, data.id, 'courses') :
                this.props.boundAddCourse(data);
                andClose && this.props.history.push(`/admin/courses`);
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
                name: this.props.currentData.name,
                start: this.props.currentData.start,
                end: this.props.currentData.end,
                startTime: this.props.currentData.startTime,
                endTime: this.props.currentData.endTime,
                teacherId: this.props.currentData.teacherId,
                classId: this.props.currentData.classId,
            });
            this.props.boundDropCurrentData();
        }
    }

    render() {
        const {selectClassData, selectTeacherData, closeForm} = this.props;
        return (
            <form onSubmit={(ev) => this.handleSubmit(ev, this.state)} className='course-form forms-form'>
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
                                {selectTeacherData.map(item => {
                                    return (
                                        <option 
                                        value={item.id}
                                        key={'#'+Math.floor(Math.random()*16777215).toString(16)}
                                        >
                                            {`${item.firstname} ${item.lastname}`}
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
                                {selectClassData.map(item => {
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
                        max="2019-12-31"  
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
                        max="2019-12-31"  
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
                    <button type='submit' className='forms-btn'>{this.state.id ? 'Save' : 'Add course'}</button>
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
        boundAddCourse: (data) => dispatch(addCourse(data)),
        boundGetCurrentData: (id) => dispatch(getCurrentData(id, 'courses')),
        boundDropCurrentData: () => dispatch(dropCurrentData()),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CourseForm));