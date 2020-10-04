import React from 'react'
import GenerateList from './GenerateList'

function List({ todos, handleClearAll, handleDelete, handleEdit }) {
    return (
        <div className="content">
            <ul>
                {
                    todos.map(todo => {
                        return <GenerateList key={todo.id} todo={todo} handleDelete={handleDelete} handleEdit={handleEdit}/>
                    })
                }
            </ul>
            {
                todos.length > 0 && <button className="clear-all" onClick={handleClearAll}>
                    CLEAR ALL
                </button>
            }

        </div>
    )
}

export default List
