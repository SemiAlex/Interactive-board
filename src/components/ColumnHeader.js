import { useState, useContext, useRef, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"
import RemoveColumnButton from "./RemoveColumnButton";

function ColumnHeader({ column }) {
    const { columns, setColumns } = useContext(ThemeContext);
    const [title, setTitle] = useState('');

    useEffect(()=> {
        setTitle(column.header)
    }, [])

    const setEditTrue = id => {
        setColumns(columns.map(column => ({...column, edit: id === column.id ? true : false})));
    }

    const getTitle = val => {
        const previousHeader = column.header;
        const newHeader = val.target.value;
        setTitle(newHeader.length ? newHeader : previousHeader)
    };

    const ref = useRef(null);

    const changeTitle = id => {
        setColumns(columns.map(element => ({ ...element, header: element.id === column.id ? `${title}` : `${element.header}`, edit: false })));
        console.log(id)
    }

    return <div className="d-flex justify-content-between align-items-center"> {column.edit ? 
        <input className="transparent border-0 w-100" type="text" maxlength="50" ref={ref}
        defaultValue={`${column.header}`}
        onChange={getTitle}
        onBlur={changeTitle}
        onEnter={changeTitle} /> :
        <span className="text-wrap text-break" onClick={() => setEditTrue(column.id)}>{column.header}</span>}<RemoveColumnButton column={column} />
        </div>
}

export default ColumnHeader