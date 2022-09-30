import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function RemoveTaskButton({ task, column, columns, setColumns, maxId, setMaxId }) {
    
    const removeTask = id => {
        setColumns(columns.map(column => ({...column, tasks: (column.tasks.filter(task => !(task.id === id)).map(task => ({...task, id: task.id > id ? task.id-1 : task.id})))})))
        setMaxId(maxId-1)
    };

    return <button className="border-0 transparent" onClick={() => removeTask(task.id)}><h6 className="text-white">X</h6></button>
}

export default RemoveTaskButton

//        setColumns(columns.map(task => !(id === column.id)).map(task => ({...task, id: task.id > id ? task.id-1 : task.id})));