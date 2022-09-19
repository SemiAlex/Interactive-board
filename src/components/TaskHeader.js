import { useState, useContext, useEffect, useRef } from "react";
import ThemeContext from "../context/ThemeContext";

function TaskHeader({ task }) {
    const { tasks, setTasks } = useContext(ThemeContext);
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState('');

    useEffect(()=> {
        setTitle(task.header)
    }, [])

    const getTitle = val => {
        const previousHeader = task.header;
        const newHeader = val.target.value;
        setTitle(newHeader.length ? newHeader : previousHeader)
    };

    const ref = useRef(null);

    const changeTitle = id => {
        setTasks(tasks.map(element => ({ ...element, header: element.id === task.id ? `${title}` : `${element.header}` })));
        setEdit(false);
        console.log(id)
    }

    return edit ?
        <input className="transparent border-0 w-100" type="text" maxlength="50" ref={ref} defaultValue={`${task.header}`} onChange={getTitle} onBlur={changeTitle} onEnter={changeTitle} /> :
        <span className="text-wrap text-break" onClick={() => setEdit(true)}>{task.header}</span>
}

export default TaskHeader