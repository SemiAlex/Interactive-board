import '../App.css';
import { useState } from "react";
import { Portal } from "react-portal";
import RemoveTaskButton from "./RemoveTaskButton"
import TaskEdit from "./TaskEdit";

function Task({ task, column, columns, setColumns, maxId, setMaxId }) {

    const [taskEdit, setTaskEdit] = useState(false)

    return <div>
        <div className={`d-flex justify-content-between align-items-center p-1 mt-2 text-wrap text-break
        ${task.description ? 'rounded-top' : 'rounded'}
        ${task.color}`}>
            <span className='thick'>{task.header}</span>
            <div className='d-flex justify-content-between align-items-center '>
                <span className="text-nowrap pointer" onClick={() => setTaskEdit(true)}>edit</span>
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
