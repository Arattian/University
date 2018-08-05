import React from 'react';
import { withRouter } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends React.Component {
    
    handleClick() {
        this.props.history.push('/admin');
    }
    
    render() {
        return (
            <div className='sidebar'>
                <div className='logo' onClick={() => this.handleClick()}>
                    <i className="fas fa-university"></i>
                    <h3>University Management</h3>
                </div>                
                <ul className='menu'>
                    <li className='menu item'><i className='fas fa-chalkboard menu-icon'></i>Add Class</li>
                    <li className='menu item'><i className='fas fa-chalkboard-teacher menu-icon'></i>Add Teacher</li>
                    <li className='menu item'><i className='fas fa-user-graduate menu-icon'></i>Add Student</li>
                </ul>
            </div>
        );
    }
}

export default withRouter(Sidebar);