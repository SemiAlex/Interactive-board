import RemoveColumnButton from "./RemoveColumnButton";
import { useContext, useRef } from "react";
import ThemeContext from "../context/ThemeContext";

function ColumnHeader({ column }) {
    const { columns, setColumns } = useContext(ThemeContext);

    const inputRef = useRef(null);

    const saveData = id => {
        setColumns(columns.map(column => ({...column, header: column.id === id ? inputRef.current.value : column.header})));
    }

    return <div className="d-flex justify-content-between align-items-center">
        <input className="transparent border-0 w-100" type="text" maxLength="50" autoComplete="off" ref={inputRef}
        value={`${column.header}`}
        onChange={() => saveData(column.id)}/>
        <RemoveColumnButton column={column} />
        </div>
}

export default ColumnHeader