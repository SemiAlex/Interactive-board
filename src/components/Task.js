import RemoveTaskButton from "./RemoveTaskButton"
import TaskDescription from "./TaskDescription";
import TaskHeader from "./TaskHeader";

function Task({ task }) {

    return <div>
        <div className="d-flex justify-content-between align-items-center light-purple p-1 mt-2 text-wrap text-break rounded-top border border-bottom-0 border-secondary">
            <TaskHeader task={task} /><span> </span> <RemoveTaskButton task={task} />
        </div>
        <div className="bg-white p-1 text-wrap text-break rounded-bottom border border-top-0 border-secondary">
            <p><TaskDescription task={task} /></p>
        </div>
    </div>
};

export default Task
