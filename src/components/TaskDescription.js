import { useState, useContext, useEffect, useRef } from "react";
import ThemeContext from "../context/ThemeContext";

function TaskDescription({ task }) {
    const { tasks, setTasks } = useContext(ThemeContext);
    const [edit, setEdit] = useState(false);
    const [description, setDescription] = useState('');

    useEffect(()=> {
        setDescription(task.description);
    }, [])

    const getDescription = val => {
        const previousDescription = task.description;
        const newDescription = val.target.value;
        setDescription(newDescription.length ? newDescription : previousDescription);
    };

    const ref = useRef(null);

    const changeDescription = id => {
        setTasks(tasks.map(element => ({ ...element, description: element.id === task.id ? `${description}` : `${element.description}` })));
        setEdit(false);
        console.log(id)
    }

    return edit ?
        <input className="transparent border-0 w-100" type="text" maxlength="50" ref={ref} defaultValue={`${task.description}`} onChange={getDescription} onBlur={changeDescription} onEnter={changeDescription} /> :
        <span className="text-wrap text-break" onClick={() => setEdit(true)}>{task.description}</span>
}

export default TaskDescription