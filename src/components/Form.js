import React from 'react'
import { RiAddCircleFill } from 'react-icons/ri';
function Form({handleTodo, handleDate, submitForm, isEditing}) {
    return (
        <div className="container">
            <form onSubmit={submitForm}>
                <div className="input-container">
                    <div className="icon-div">
                        <RiAddCircleFill color={'white'} size={30} className="icon" />
                    </div>
                    <input className="todo-input" id="todo-input" type="text" placeholder="eg. buy banana" onChange={handleTodo}/>
                </div>
                <input type="date" className="date" id="date" onChange={handleDate}/>
                <button className="add-btn">
                {isEditing ? 'EDIT ITEM' :  'ADD ITEM'}
                </button>
            </form>
        </div>
    )
}

export default Form
