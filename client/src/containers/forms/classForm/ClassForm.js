import React from 'react';
import { withRouter } from 'react-router-dom';
import { addClass } from '../../../actions/addAction';
import { editAction } from '../../../actions/editAction';
import { connect } from 'react-redux';
import { getCurrentData, dropCurrentData } from '../../../actions/totalDataAction';
import '../Forms.css';

class ClassForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: null,
            name: '',
            teacherId: '',
            show: false,
        }
    }

    handleInputChange = (ev) => {
        this.setState({name: ev.target.value});
    }

    handleSelectChange = (ev) => {
        this.setState({teacherId: ev.target.value});
    }

    handleSubmit = (ev, data, andClose) => {
        if(this.state.name !== '' && this.state.teacherId !== '') {
            this.state.id ? 
            this.props.boundEditAction(data, data.id, 'classes') :
            this.props.boundAddClass(data);
            andClose && this.props.history.push(`/admin/classes`);
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
                teacherId: this.props.currentData.teacherId,
            });
            this.props.boundDropCurrentData();
        }
    }
    render() {
        const {selectData, closeForm} = this.props;
        return (
                <form onSubmit={(ev) => this.handleSubmit(ev, this.state)} className='forms-form'>
                    <header className='forms-header'>
                        <h2>Class</h2>
                    </header>
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
                            <select name="slct" required value={this.state.teacherId} onChange={this.handleSelectChange}>
                                {!this.state.id && <option value='' default> Choose an option </option>}
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
                        <button type='submit' className='forms-btn'>{this.state.id ? 'Save' : 'Add Class'}</button>
                        <button className='forms-btn' type='submit' onClick={(ev) => this.handleSubmit(ev, this.state, true)}>{this.state.id ? 'Save and Close' : 'Add and Close'}</button>
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
        boundAddClass: (data) => dispatch(addClass(data)),
        boundGetCurrentData: (id) => dispatch(getCurrentData(id, 'classes')),
        boundDropCurrentData: () => dispatch(dropCurrentData()),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClassForm));