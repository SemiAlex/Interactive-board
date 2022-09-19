import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function RemoveTaskButton({ task }) {
    const { tasks, setTasks } = useContext(ThemeContext);

    const removeTask = id => {
        setTasks(tasks.filter(task => !(id === task.id)).map(task => ({...task, id: task.id > id ? task.id-1 : task.id})));
    };

    return <button className="border-0 transparent" onClick={() => removeTask(task.id)}><h6 className="text-white">X</h6></button>
}

export default RemoveTaskButton