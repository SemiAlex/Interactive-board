import { useContext, useRef } from "react";
import ThemeContext from "../context/ThemeContext";

function TaskDescription({ task, columns, setColumns }) {

    const inputRef = useRef(null);

    const saveData = id => {
        setColumns(columns.map(column => ({...column, tasks: (column.tasks.map(task => ({...task, description: task.id === id ? inputRef.current.value : task.description})))})));
    }

    return <input className="transparent border-0 w-75 text-break text-wrap" type="text" maxLength="50" ref={inputRef}
         value={`${task.description}`}
         onChange={() => saveData(task.id)} />
}

export default TaskDescription