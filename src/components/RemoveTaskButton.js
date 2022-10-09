import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function RemoveTaskButton({ task, columns, setColumns, maxId, setMaxId }) {
    
    const removeTask = id => {
        setColumns(columns.map(column =>
             ({...column, tasks: (column.tasks.filter(task =>
             !(task.id === id)).map(task => 
            ({...task, id: task.id > id ? task.id-1 : task.id})))})))
        setMaxId(maxId-1)
    };

    return <button className="border-0 transparent pointer thick" onClick={() => removeTask(task.id)}>
        <FontAwesomeIcon icon={faXmark} />
    </button>
}

export default RemoveTaskButton