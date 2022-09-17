import { useState, useContext, useRef } from "react"
import ThemeContext from "../context/ThemeContext"

function ColumnHeader({ column }) {
    const { columns, setColumns } = useContext(ThemeContext);
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState('');

    const getTitle = val => {
        setTitle(val.target.value)
    };

    const ref = useRef(null);

    const changeTitle = id => {
        setColumns(columns.map(element => ({ ...element, header: element.id === column.id ? `${title}` : `${element.header}` })));
        setEdit(false);
        console.log(id)
    }

    return edit ?
        <input type="text" maxlength="50" ref={ref} defaultValue={`${column.header}`} onChange={getTitle} onBlur={changeTitle} onEnter={changeTitle} /> :
        <span className="text-wrap text-break" onClick={() => setEdit(true)}>{column.header}</span>
}

export default ColumnHeader