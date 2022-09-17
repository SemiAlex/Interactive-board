import { useContext, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"
import DeleteTaskButton from "./DeleteTaskButton"

function Tasks({colId}) {
    const { tasks, setTasks } = useContext(ThemeContext);

    useEffect(() => {
        setTasks([
            {id: 0, colNum: 0, title: 'Example Task', description: 'Description will be placed here'},
        ])
    }, []);

    return <>
    { tasks.map(task => task.colNum === colId ? <div className="mt-2">
    <div className="d-flex justify-content-between light-purple p-1 text-wrap text-break rounded-top border border-bottom-0 border-secondary">
        <h5>{task.title}</h5><DeleteTaskButton />
    </div>
    <div className="bg-white p-1 text-wrap text-break rounded-bottom border border-top-0 border-secondary">
        <p>{task.description}</p>
    </div>
</div> : '')}
</>
};

export default Tasks

