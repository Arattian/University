import React from 'react';
import './ClassModal.css';

class ClassModal extends React.Component {
    render() {
        return (
                <form onSubmit={(ev) => this.props.handleSubmit(ev, this.refs, 'class')}>
                    <div className='class-input-container'>
                        <label htmlFor='class'>
                            <h4>Class Name*</h4>
                        </label>
                        <input 
                            className='class-input-field' 
                            type='text' 
                            placeholder='Enter Name' 
                            name='class' 
                            ref='name' 
                            id='class' 
                            pattern='[\p{L}]+'
                            required
                        />
                    </div>
                    <div className='class-input-container'>
                        <label htmlFor='description'>
                            <h4>Class Description</h4>
                        </label>
                        <textarea 
                            className='class-input-field' 
                            placeholder='Enter Description' 
                            name='description' 
                            ref='description' 
                            id='description'
                        />
                    </div>
                    <button type='submit' className='class-btn'>Add Class</button>
                </form>
        );
    }
}

export default ClassModal;