import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className='main'>
                <header>
                    <h2>Dashboard</h2>
                    <p>Welcome back</p>
                </header>
                <div className='statistics'>
                    <h2>Statistics</h2>
                    <div className='stat-container'>
                        <Link to='/admin/classes' className='classes stat'>
                                <div className='stat-info'>
                                    <h4>{this.props.totalClasses}</h4>
                                    <p>Total Classes</p>
                                </div>
                                <i className='fas fa-chalkboard menu-icon'></i>
                        </Link>
                        <Link to='/admin/teachers' className='teachers stat'>
                            <div className='stat-info'>
                                <h4>{this.props.totalTeachers}</h4>
                                <p>Total Teachers</p>
                            </div>
                            <i className='fas fa-chalkboard-teacher menu-icon'></i>
                        </Link>
                        <Link to='/admin/students' className='students stat'>
                            <div className='stat-info'>
                                <h4>{this.props.totalStudents}</h4>
                                <p>Total Students</p>
                            </div>
                            <i className='fas fa-user-graduate menu-icon'></i>
                        </Link>
                        <Link to='/admin/courses' className='courses stat'>
                            <div className='stat-info'>
                                <h4>{this.props.totalCourses}</h4>
                                <p>Total Courses</p>
                            </div>
                            <i className='far fa-calendar-alt menu-icon'></i>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;