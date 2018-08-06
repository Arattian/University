import React from 'react';
import './ClassData.css';

const ClassData = ({data, handleEdit, handleDelete}) => {
    return (
        <div>
            <ul className='data'>
                <ul className='first-row'>
                    <li>Name</li>
                    <li>Description</li>
                    <div className='empty'></div>
                    <div className='empty'></div>
                </ul>
                {data.map((item, index) => {
                    return (
                        <li key={'#'+Math.floor(Math.random()*16777215).toString(16)} className='row-container'>
                            <ul className='row'>
                                <li>{item.name}</li>
                                <li>{item.description === '' ? <p>-----------------</p> : item.description}</li>
                            </ul>
                            <div className='action-icon-container' onClick={() => handleEdit(item, 'class')}>
                                <i className="far fa-edit icon-edit action-icon"></i>
                            </div>
                            <div className='action-icon-container' onClick={() => handleDelete(item, 'class')}> 
                                <i className="fas fa-trash-alt icon-delete action-icon"></i>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ClassData;