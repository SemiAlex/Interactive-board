import RemoveTaskButton from "./RemoveTaskButton"
import TaskDescription from "./TaskDescription";
import TaskHeader from "./TaskHeader";

function Task({ task, column, columns, setColumns, maxId, setMaxId }) {

    return <div>
        <div className="d-flex justify-content-between align-items-center light-purple p-1 mt-2 text-wrap text-break rounded-top border border-bottom-0 border-secondary">
            <TaskHeader task={task} column={column} columns={columns} setColumns={setColumns} />
            <span>
                {task.id} 
            </span> 
            <RemoveTaskButton task={task} column={column} columns={columns} setColumns={setColumns} maxId={maxId} setMaxId={setMaxId} />
        </div>
        <div className="bg-white p-1 text-wrap text-break rounded-bottom border border-top-0 border-secondary">
            <p><TaskDescription task={task} columns={columns} setColumns={setColumns} /></p>
        </div>
    </div>
};

export default Task
