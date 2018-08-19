import React from 'react';
import './ClassForm.css';

class ClassForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: null,
            name: '',
            teacherId: '',
        }
    }

    handleInputChange = (ev) => {
        this.setState({name: ev.target.value});
    }

    handleSelectChange = (ev) => {
        this.setState({teacherId: ev.target.value});
    }

    validateInput = () => {
        return this.state.name !== '' &&
         this.state.teacherId !== '' &&
         this.state.teacherId !== null;
    }

    handleSubmit = (ev, data, redirect) => {
        if(this.validateInput()) {
            if(this.state.id) {
                this.props.onSubmit(data, data.id, 'classes');
                redirect && this.props.closeForm('classes'); 
            } else if (redirect) {
                this.props.onSubmit(data, 'classes', redirect);
            } else {
                this.props.onSubmit(data, 'classes');
                this.setState({
                    name: '',
                    teacherId: '',
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
                teacherId: this.props.currentItem.teacherId,
            });
        }
    }

    render() {
        const {itemList, closeForm} = this.props;
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
                                {itemList.map(item => {
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
                    <div className='forms-btn-container'>
                        <button className='forms-btn' onClick={() => closeForm('classes')}>Close</button>
                        <button type='submit' className='forms-btn'>{this.state.id ? 'Save' : 'Add and Create New'}</button>
                        <button className='forms-btn' type='submit' onClick={(ev) => this.handleSubmit(ev, this.state, true)}>{this.state.id ? 'Save and Close' : 'Add Class'}</button>
                    </div>
                </form>
        );
    }
}

export default ClassForm;