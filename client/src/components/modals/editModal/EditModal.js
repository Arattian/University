import React from 'react';
import ClassModal from '../classModal/ClassModal';
import TeacherModal from '../teacherModal/TeacherModal';
import StudentModal from '../studentModal/StudentModal';
import './EditModal.css';


const EditModal = ({data, editAction, dataBelongTo}) => {
        return (
            <div>
                {dataBelongTo === 'class' ? 
                    <ClassModal handleSubmit={editAction} data={data}/> : 
                    dataBelongTo === 'teacher' ? 
                    <TeacherModal handleSubmit={editAction} data={data}/> : 
                    <StudentModal handleSubmit={editAction} data={data}/>
                }
            </div>
        );
}

export default EditModal;