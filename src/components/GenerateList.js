import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md";
function GenerateList(props) {
    return (
        <>
            <li>
                <div className="list-item">
                    <div className="task-item">{props.todo.task}</div>
                    <div className="date-item">{props.todo.date}</div>
                    <div className="btn-icon">
                        <button className="edit" onClick={()=>{props.handleEdit(props.todo.id)}}>
                            <MdEdit />
                        </button>
                        <button className="delete" onClick={()=>{props.handleDelete(props.todo.id)}}>
                            <MdDelete />
                        </button>
                    </div>
                </div>
            </li>
        </>
    )
}

export default GenerateList
