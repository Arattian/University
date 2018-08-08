import React from 'react';
import ClassModal from '../classModal/ClassModal';
import TeacherModal from '../teacherModal/TeacherModal';
import StudentModal from '../studentModal/StudentModal';
import './EditModal.css';


const EditModal = ({defaultData, editAction, dataBelongTo, selectData}) => {
        return (
            <div>
                {dataBelongTo === 'class' ? 
                    <ClassModal handleSubmit={editAction} defaultData={defaultData} selectData={selectData}/> : 
                    dataBelongTo === 'teacher' ? 
                    <TeacherModal handleSubmit={editAction} defaultData={defaultData}/> : 
                    <StudentModal handleSubmit={editAction} defaultData={defaultData}/>
                }
            </div>
        );
}

export default EditModal;