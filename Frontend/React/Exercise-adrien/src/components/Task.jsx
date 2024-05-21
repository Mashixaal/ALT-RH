import React from 'react'

const Task = ({id, desc, deleteTask}) => {
    return (
        <li>
            {desc}
            <button onClick={() => {deleteTask(id)}}>supprimer</button>
        </li>
    )

}

export default Task