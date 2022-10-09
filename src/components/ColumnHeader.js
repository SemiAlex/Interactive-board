import RemoveColumnButton from "./RemoveColumnButton";
import { useRef } from "react";

function ColumnHeader({ column, columns, setColumns }) {

    const inputRef = useRef(null);

    const saveData = id => {
        setColumns(columns.map(column => ({...column, header: column.id === id ? inputRef.current.value : column.header})));
    }

    return <div className="d-flex justify-content-between align-items-center">
        <input className="transparent border-0 w-100 hover-shadow text-white" type="text" maxLength="15" autoComplete="off" ref={inputRef}
            value={`${column.header}`}
            onChange={() => saveData(column.id)} />
        <RemoveColumnButton column={column} columns={columns} setColumns={setColumns} />
    </div>
}

export default ColumnHeader