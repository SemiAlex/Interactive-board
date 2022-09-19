import { useState, useContext, useEffect, useRef } from "react";
import ThemeContext from "../context/ThemeContext";

function TaskHeader({ task }) {
    const { tasks, setTasks } = useContext(ThemeContext);
    const [title, setTitle] = useState('');

    useEffect(()=> {
        setTitle(task.header)
    }, [])

    const setEditTrue = id => {
        setTasks(tasks.map(task => ({...task, descriptionEdit: false, headerEdit: id === task.id ? true : false})));
    }

    const getTitle = val => {
        const previousHeader = task.header;
        const newHeader = val.target.value;
        setTitle(newHeader.length ? newHeader : previousHeader)
    };

    const ref = useRef(null);

    const changeTitle = () => {
        setTasks(tasks.map(element => ({ ...element, descriptionEdit: false, headerEdit: false, header: element.id === task.id ? 
            `${title}` : 
            `${element.header}` })));
    }

    return task.headerEdit ?
        <input className="transparent border-0 w-100" type="text" maxlength="50" ref={ref}
        defaultValue={`${task.header}`}
        onChange={getTitle}
        onBlur={changeTitle}
        onEnter={changeTitle} /> :
        <span className="text-wrap text-break" onClick={() => setEditTrue(task.id)}>{task.header}</span>
}

export default TaskHeader