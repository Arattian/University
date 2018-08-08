import React from 'react';
import { withRouter } from 'react-router-dom';
import { addClass } from '../../../actions/addAction';
import { editClass } from '../../../actions/editAction';
import { connect } from 'react-redux';
import '../Forms.css';
import { getTotalData, getCurrentData } from '../../../actions/totalDataAction';

class ClassForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            teacherId: null
        }
    }

    handleInputChange = (ev) => {
        this.setState({name: ev.target.value});
    }

    handleSelectChange = (ev) => {
        this.setState({teacherId: ev.target.value});
    }

    handleSubmit = (ev, data, actionType, id) => {
        actionType === 'edit' ? this.props.boundEditAction(data, id) : this.props.boundAddClass(data);
        this.props.boundGetNewData();
        ev.preventDefault();        
    }

    componentDidMount() {
        const id = this.props.location.pathname[this.props.location.pathname.length - 1];
        this.props.boundGetCurrentData(id);
    }

    render() {
        const {defaultData, selectData, closeForm, currentData} = this.props;
        console.log(currentData);
        return (
                <form onSubmit={(ev) => {
                    defaultData ? this.handleSubmit(ev, this.state, 'edit', defaultData.id) : this.handleSubmit(ev, this.state, 'add', )
                }} className='forms-form'>
                    <div className='forms-input-container'>
                        <label htmlFor='class'>
                            <h4>Class Name*</h4>
                        </label>
                        <input 
                            className='forms-input-field' 
                            type='text' 
                            placeholder='Enter Name'
                            name='class' 
                            id='class'
                            required
                            onChange={this.handleInputChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className='forms-input-container'>
                        <label>
                            <h4>Teacher*</h4>
                        </label>
                        <div className="select">
                            <select name="slct" required value={this.state.teacherId ? this.state.teacherId : 'default'} onChange={this.handleSelectChange}>
                                {defaultData ? defaultData.teacherId ? false : <option value='' default> Choose an option </option> : <option value='' default> Choose an option </option>}
                                {selectData.map(item => {
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
                    <div className='forms-btn-container'>
                        <button className='forms-btn' onClick={() => closeForm('classes')}>Close</button>
                        <button type='submit' className='forms-btn'>{this.props.defaultData ? 'Save' : 'Add Class'}</button>
                        <button type='submit' className='forms-btn' onClick={() => this.submitAndClose()}>{this.props.defaultData ? 'Save and Close' : 'Add Class and Close'}</button>
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
        boundEditAction: (data, id) => dispatch(editClass(data, id)),
        boundAddClass: (data) => dispatch(addClass(data)),
        boundGetNewData: () => dispatch(getTotalData()),
        boundGetCurrentData: (id) => dispatch(getCurrentData(id)),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClassForm));