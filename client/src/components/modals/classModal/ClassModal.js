import React from 'react';
import './ClassModal.css';

class ClassModal extends React.Component {
    render() {
        return (
                <form onSubmit={(ev) => {
                    this.props.data ? this.props.handleSubmit(ev, this.refs, 'class', this.props.data.id) : this.props.handleSubmit(ev, this.refs, 'class')
                }}>
                    <div className='modal-input-container'>
                        <label htmlFor='class'>
                            <h4>Class Name*</h4>
                        </label>
                        <input 
                            className='modal-input-field' 
                            type='text' 
                            placeholder={this.props.data ? this.props.data.name : 'Enter Name'}
                            name='class' 
                            ref='name' 
                            id='class'
                            required
                        />
                    </div>
                    <div className='modal-input-container'>
                        <label htmlFor='description'>
                            <h4>Class Description</h4>
                        </label>
                        <textarea 
                            className='modal-input-field' 
                            placeholder={this.props.data ? this.props.data.description : 'Enter Description'} 
                            name='description'
                            ref='description' 
                            id='description'
                        />
                    </div>
                    <button type='submit' className='modal-btn'>{this.props.data ? 'Confirm changes' : 'Add Class'}</button>
                </form>
        );
    }
}

export default ClassModal;