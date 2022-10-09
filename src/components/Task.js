import '../App.css';
import { useState } from "react";
import { Portal } from "react-portal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import RemoveTaskButton from "./RemoveTaskButton"
import TaskEdit from "./TaskEdit";

function Task({ task, column, columns, setColumns, maxId, setMaxId }) {

    const [taskEdit, setTaskEdit] = useState(false)

    return <div>
        <div className={`d-flex justify-content-between align-items-center p-1 mt-2 text-wrap text-break
        ${task.description ? 'rounded-top' : 'rounded'}
        ${task.color}`}>
            <span className='thick p-1'>{task.header}</span>
            <div className='d-flex justify-content-between align-items-center '>
                <button className="text-nowrap border-0 transparent" onClick={() => setTaskEdit(true)}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <RemoveTaskButton
                    task={task}
                    column={column}
                    columns={columns}
                    setColumns={setColumns}
                    maxId={maxId}
                    setMaxId={setMaxId} />
            </div>
        </div>
        {task.description ? <div className="bg-white p-1 text-wrap text-break">
            <p>{task.description}</p>
        </div> : ''}
        {taskEdit ?
            <Portal node={document && document.getElementById('portal')}>
                <div className="overlay-style" />
                <TaskEdit task={task} setTaskEdit={setTaskEdit} columns={columns} setColumns={setColumns} />
            </Portal> : ''}
    </div>
};

export default Task
