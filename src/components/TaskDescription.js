import { useState, useContext, useEffect, useRef } from "react";
import ThemeContext from "../context/ThemeContext";

function TaskDescription({ task }) {
    const { tasks, setTasks } = useContext(ThemeContext);
    const [description, setDescription] = useState('');

    useEffect(()=> {
        setDescription(task.description);
    }, [])

    const setEditTrue = id => {
        setTasks(tasks.map(task => ({...task, headerEdit: false, descriptionEdit: id === task.id ? true : false})));
    }

    const getDescription = val => {
        const previousDescription = task.description;
        const newDescription = val.target.value;
        setDescription(newDescription.length ? newDescription : previousDescription);
    };

    const ref = useRef(null);

    const changeDescription = () => {
        setTasks(tasks.map(element => ({ ...element, headerEdit: false, descriptionEdit: false, description: element.id === task.id ? 
            `${description}` :
            `${element.description}`})));
    }

    return task.descriptionEdit ?
        <input className="transparent border-0 w-100" type="text" maxlength="50" ref={ref} 
         defaultValue={`${task.description}`}
         onChange={getDescription}
         onBlur={changeDescription}
         onEnter={changeDescription} /> :
        <span className="text-wrap text-break" onClick={() => setEditTrue(task.id)}>{task.description}</span>
}

export default TaskDescription