import { useContext, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"
import RemoveTaskButton from "./RemoveTaskButton"
import TaskDescription from "./TaskDescription";
import TaskHeader from "./TaskHeader";

function Tasks({ column }) {
    const { tasks, setTasks, columns } = useContext(ThemeContext);

    return <>
        {tasks.map(task => task.colNum === column.id ? <div className="mt-2">
            <div className="d-flex justify-content-between align-items-center light-purple p-1 text-wrap text-break rounded-top border border-bottom-0 border-secondary">
                <TaskHeader task={task} /><span>id: {task.id}</span> <RemoveTaskButton task={task} />
            </div>
            <div className="bg-white p-1 text-wrap text-break rounded-bottom border border-top-0 border-secondary">
                <p><TaskDescription task={task} /></p>
            </div>
        </div> : '')}
    </>
};

export default Tasks

