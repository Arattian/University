import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='sidebar-fixed'>
                    <Link to='/admin' className='link'>
                        <header className='logo' to='/admin'>
                            <i className="fas fa-university"></i>
                            <h3>University Management</h3>
                        </header>
                    </Link>                
                    <ul className='menu'>
                        <Link to='/admin/classes/add' className='link'>
                            <li className='menu item'>
                                <i className='fas fa-chalkboard menu-icon'></i>Add Class
                            </li>
                        </Link>
                        <Link to='/admin/teachers/add' className='link'>    
                            <li className='menu item' >
                                <i className='fas fa-chalkboard-teacher menu-icon'></i>Add Teacher
                            </li>
                        </Link>
                        <Link to='/admin/students/add' className='link'>
                            <li className='menu item'>
                                <i className='fas fa-user-graduate menu-icon'></i>Add Student
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(Sidebar);