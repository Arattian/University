import React from 'react';
import './PeopleData.css';

class PeopleData extends React.Component {
    render() {
        return (
            <div className='data-main'>
                <ul className='first-row'>
                    <li>Id</li>
                    <li>First Name</li>
                    <li>Last Name</li>
                    <li>Age</li>
                </ul>
                <ul className='data'>
                    {this.props.data.map(item => {
                        return (
                            <li key={'#'+Math.floor(Math.random()*16777215).toString(16)} className='row-container'>
                                <ul className='row'>
                                    <li>{item.id}</li>
                                    <li>{item.firstname}</li>
                                    <li>{item.lastname}</li>
                                    <li>{item.age}</li>
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default PeopleData;