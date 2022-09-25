import { useContext, useRef } from "react";
import ThemeContext from "../context/ThemeContext";

function TaskHeader({ task, column }) {
    const { columns, setColumns } = useContext(ThemeContext);

    const handleDrag = event => event.preventDefault();

    const inputRef = useRef(null);

    const saveData = (id) => {
        setColumns(columns.map(column => ({...column, tasks: (column.tasks.map(task => ({...task, header: task.id === id ? inputRef.current.value : task.header})))})));
    }

    return <input className="transparent border-0 w-75 text-white font-weight-bold text-wrap text-break" 
    style={{fontWeight: "bold"}} 
    type="text" maxLength="50" 
    ref={inputRef}
    value={`${task.header}`}
    onChange={() => saveData(task.id)} 
    onDrag={handleDrag} />
}

export default TaskHeader