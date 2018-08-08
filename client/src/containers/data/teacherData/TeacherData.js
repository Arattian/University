import React from 'react';
import './TeacherData.css';

const TeacherData = ({data, handleEditRedirect, handleDeleteRedirect}) => {
    return (
        <div>
            <header>
                <h2>Teachers</h2>
            </header>
            <ul className='data'>
                <ul className='first-row'>
                    <li>First Name</li>
                    <li>Last Name</li>
                    <li>Age</li>
                    <div className='empty'></div>
                    <div className='empty'></div>
                </ul>
                {data.map((item) => {
                    return (
                        <li key={'#'+Math.floor(Math.random()*16777215).toString(16)} className='row-container'>
                            <ul className='row'>
                                <li>{item.firstname}</li>
                                <li>{item.lastname}</li>
                                <li>{item.age}</li>
                            </ul>
                            <div className='action-icon-container' onClick={() => handleEditRedirect(item, 'teacher')}>
                                <i className="far fa-edit icon-edit action-icon"></i>
                            </div>
                            <div className='action-icon-container' onClick={() => handleDeleteRedirect(item, 'teacher')}>
                                <i className="fas fa-trash-alt icon-delete action-icon"></i>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default TeacherData;