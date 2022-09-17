import { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';

function AddTaskButton({colId}) {
    const [isActive, setActive] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { tasks, setTasks } = useContext(ThemeContext);

    const handleSubmit = event => {
        event.preventDefault();
      };

    const handleClick = () => {
        setActive(!isActive);
    };

    const getTitle = val => {
        setTitle(val.target.value);
    };

    const getDescription = val => {
        setDescription(val.target.value);
    };

    const addTask = () => {
        setTasks([...tasks, {id: tasks.length, colNum: colId, title: `${title}`, description: `${description}`}]);
        setActive(!isActive);
        setTitle('');
        setDescription('');
    };
    
    return !isActive ? 
    <button className="border-0 transparent grey" onClick={() => handleClick()}><span className="h4">+</span> Add Task</button> : 
    <div>
            <form className='mt-2 text-center' onSubmit={handleSubmit}>
                <input type="text" className='border-0 border-bottom rounded-top' placeholder="Provide title" onChange={getTitle} />
                <input type="text" className='border-0 border-top rounded-bottom' placeholder="Description..." onChange={getDescription} />
                <input type="submit" className='border-0 light-purple mt-2 rounded' onClick={title.length ? addTask : ''}>
                </input>
            </form>
        </div>
    };


export default AddTaskButton