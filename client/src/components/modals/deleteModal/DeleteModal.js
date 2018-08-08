import React from 'react';
import './DeleteModal.css';

const DeleteModal = ({data, deleteAction, dataBelongTo}) => {
    return (
        <div>
            {data.name ? <p className='del-text'>You want to delete <b>{data.name}</b> from classlist.Are you sure?</p> : false}
            {data.firstname ? <p className='del-text'>You want to dismiss <b>{data.firstname} {data.lastname}</b> from university.Are you sure?</p> : false}
            <button className='btn delete' onClick={() => deleteAction(data.id, dataBelongTo)}>Delete</button>
        </div>
    );
}

export default DeleteModal;