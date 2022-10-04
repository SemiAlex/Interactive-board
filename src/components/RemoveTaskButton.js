function RemoveTaskButton({ task, columns, setColumns, maxId, setMaxId }) {
    
    const removeTask = id => {
        setColumns(columns.map(column =>
             ({...column, tasks: (column.tasks.filter(task =>
             !(task.id === id)).map(task => 
            ({...task, id: task.id > id ? task.id-1 : task.id})))})))
        setMaxId(maxId-1)
    };

    return <span className="border-0 transparent pointer" onClick={() => removeTask(task.id)}>X</span>
}

export default RemoveTaskButton