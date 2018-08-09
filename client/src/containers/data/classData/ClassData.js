import React from 'react';
import '../Data.css';

const ClassData = ({data, handleEditRedirect, handleDelete}) => {
    return (
        <div className='data-main'>
            <header>
                <h2>Classes</h2>
            </header>
            <ul className='data'>
                <ul className='first-row'>
                    <li>Name</li>
                    <li>Teacher</li>
                    <div className='empty'></div>
                    <div className='empty'></div>
                </ul>
                {data.map((item) => {
                    return (
                        <li key={'#'+Math.floor(Math.random()*16777215).toString(16)} className='row-container'>
                            <ul className='row'>
                                <li>{item.name}</li>
                                <li>{item.Teacher === null ? '-----------------': item.Teacher.firstname + ' ' + item.Teacher.lastname}</li>
                            </ul>
                            <div className='action-icon-container' onClick={() => handleEditRedirect(item.id, 'classes')}>
                                <i className="far fa-edit icon-edit action-icon"></i>
                            </div>
                            <div className='action-icon-container' onClick={() => handleDelete(item.id, 'classes')}> 
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