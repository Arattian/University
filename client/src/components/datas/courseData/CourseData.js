import React from 'react';
import './CourseData.css';

const CourseData = ({data, handleEditRedirect, handleDelete}) => {
    return (
        <div>
            <header>
                <h2>Courses</h2>
            </header>
            <ul className='data'>
                <ul className='first-row'>
                    <li>Name</li>
                    <li>Teacher</li>
                    <li>Class</li>
                    <li>Start Date</li>
                    <li>End Date</li>
                    <li>Start Time</li>
                    <li>End Time</li>
                    <div className='empty'></div>
                    <div className='empty'></div>
                </ul>
                {data.map((item) => {
                    return (
                        <li key={'#'+Math.floor(Math.random()*16777215).toString(16)} className='row-container'>
                            <ul className='row'>
                                <li>{item.name}</li>
                                <li>{item.Teacher ? `${item.Teacher.firstname} ${item.Teacher.lastname}` : '-----------------'}</li>
                                <li>{item.Class ? item.Class.name : '-----------------'}</li>
                                <li>{item.start}</li>
                                <li>{item.end}</li>
                                <li>{item.startTime}</li>
                                <li>{item.endTime}</li>
                            </ul>
                            <div className='action-icon-container' onClick={() => handleEditRedirect(item.id, 'courses')}>
                                <i className="far fa-edit icon-edit action-icon"></i>
                            </div>
                            <div className='action-icon-container' onClick={() => handleDelete(item.id, 'courses')}>
                                <i className="fas fa-trash-alt icon-delete action-icon"></i>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default CourseData;