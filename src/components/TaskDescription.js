import { useContext, useRef } from "react";
import ThemeContext from "../context/ThemeContext";

function TaskDescription({ task }) {
    const { tasks, setTasks } = useContext(ThemeContext);

    const inputRef = useRef(null);

    const saveData = id => {
        setTasks(tasks.map(task => ({...task, description: task.id === id ? inputRef.current.value : task.description})));
    }

    return <input className="transparent border-0 w-100 text-break text-wrap" type="text" maxLength="50" ref={inputRef}
         value={`${task.description}`}
         onChange={() => saveData(task.id)} />
}

export default TaskDescription