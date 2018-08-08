import React from 'react';
import './DeleteModal.css';

const DeleteModal = ({defaultData, deleteAction, dataBelongTo}) => {
    return (
        <div>
            {defaultData.name ? <p className='del-text'>You want to delete <b>{defaultData.name}</b> from classlist.Are you sure?</p> : false}
            {defaultData.firstname ? <p className='del-text'>You want to dismiss <b>{defaultData.firstname} {defaultData.lastname}</b> from university.Are you sure?</p> : false}
            <button className='btn delete' onClick={() => deleteAction(defaultData.id, dataBelongTo)}>Delete</button>
        </div>
    );
}

export default DeleteModal;