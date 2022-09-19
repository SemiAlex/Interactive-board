import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function RemoveColumnButton({ column }) {
    const {tasks, setTasks, columns, setColumns} = useContext(ThemeContext);

    const removeColumn = id => {
        setColumns(columns.filter(column => !(id === column.id)).map(column => ({...column, id: column.id > id ? column.id-1 : column.id, header: `${column.header}`})));
        setTasks(tasks.filter(task => !(task.colNum === column.id)).map(task => ({...task, colNum: task.colNum > id ? task.colNum-1 : task.colNum})));
    };

    return <div>
        <button className='border-0 transparent grey h6' onClick={() => removeColumn(column.id)}>X</button>
    </div>
};

export default RemoveColumnButton