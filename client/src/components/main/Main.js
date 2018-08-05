import React from 'react';
import './Main.css';

class Main extends React.Component {
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
                        <div className='classes stat'>
                            <div className='stat-info'>
                                <h4>{this.props.totalClasses}</h4>
                                <p>Total Classes</p>
                            </div>
                            <i className='fas fa-chalkboard menu-icon'></i>
                        </div>
                        <div className='teachers stat'>
                            <div className='stat-info'>
                                <h4>{this.props.totalTeachers}</h4>
                                <p>Total Teachers</p>
                            </div>
                            <i className='fas fa-chalkboard-teacher menu-icon'></i>
                        </div>
                        <div className='students stat'>
                            <div className='stat-info'>
                                <h4>{this.props.totalStudents}</h4>
                                <p>Total students</p>
                            </div>
                            <i className='fas fa-user-graduate menu-icon'></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Main;