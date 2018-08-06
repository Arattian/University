import React from 'react';
import './ClassData.css';

class ClassData extends React.Component {
    render() {
        return (
            <div className='data-main'>
                <ul className='first-row'>
                    <li>Id</li>
                    <li>Name</li>
                    <li>Description</li>
                </ul>
                <ul className='data'>
                    {this.props.data.map(item => {
                        return (
                            <li key={'#'+Math.floor(Math.random()*16777215).toString(16)} className='row-container'>
                                <ul className='row'>
                                    <li>{item.id}</li>
                                    <li>{item.name}</li>
                                    <li>{item.description}</li>
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default ClassData;