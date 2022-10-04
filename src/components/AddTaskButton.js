import { useState } from 'react';

function AddTaskButton({ column, columns, setColumns, maxId, setMaxId }) {

    const [isActive, setActive] = useState(false);
    const [header, setHeader] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
      };

    const handleClick = () => {
        setActive(!isActive);
    };

    const getHeader = val => {
        setHeader(val.target.value);
    };

    const getDescription = val => {
        setDescription(val.target.value);
    };

    const addTask = id => {
        setColumns(columns.map(column => column.id === id ?
            ({
                ...column, tasks:
                    [...column.tasks, { id: maxId, header: header.length ? `${header}` : 'New Task', description: `${description}`, color: 'task-grey' }]
            }) :
            ({ ...column })));
        setMaxId(maxId + 1)
        setActive(!isActive);
        setHeader('');
        setDescription('');
    };

    return !isActive ?
        <button className="border-0 transparent hover-shadow my-2" onClick={() => handleClick()}><span className="h4">+</span> Add Task</button> :
        <form className='mt-2 text-center p-1 mt-2' onSubmit={handleSubmit} >
            <input type="text" className='border-0 w-100' placeholder="Provide title" onChange={getHeader} />
            <input type="text" className='border-0 w-100' placeholder="Description..." onChange={getDescription} />
            <div className='d-flex justify-content-between align-items-end'>
                <input type="submit" className='border-0 yellow mt-2' onClick={() => addTask(column.id)} />
                <button className="border-0 transparent" onClick={() => handleClick()}><span className='h6'>X</span></button>
            </div>
        </form>
};


export default AddTaskButton


