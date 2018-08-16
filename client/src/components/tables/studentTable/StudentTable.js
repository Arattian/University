import React from 'react';
import './StudentTable.css';

const StudentTable = ({table, handleEditRedirect, handleDelete}) => {
    return (
        <div>
            <header>
                <h2>Students</h2>
            </header>
            <ul className='data'>
                <ul className='first-row'>
                    <li>First Name</li>
                    <li>Last Name</li>
                    <li>Age</li>
                    <li>Class</li>
                    <div className='empty'></div>
                    <div className='empty'></div>
                </ul>
                {table.map((item) => {
                    return (
                        <li key={'#'+Math.floor(Math.random()*16777215).toString(16)} className='row-container'>
                            <ul className='row'>
                                <li>{item.firstName}</li>
                                <li>{item.lastName}</li>
                                <li>{item.age}</li>
                                <li>{item.Class ? item.Class.name : '-----------------'}</li>
                            </ul>
                            <div className='action-icon-container' onClick={() => handleEditRedirect(item.id, 'students')}>
                                <i className="far fa-edit icon-edit action-icon"></i>
                            </div>
                            <div className='action-icon-container' onClick={() => handleDelete(item.id, 'students')}>
                                <i className="fas fa-trash-alt icon-delete action-icon"></i>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default StudentTable;