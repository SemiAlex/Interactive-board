import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function RemoveColumnButton({ column }) {
    const {columns, setColumns} = useContext(ThemeContext);

    const removeColumn = id => {
        setColumns(columns.filter(column => !(id === column.id)).map(column => ({id: column.id > id ? column.id-1 : column.id, header: `${column.header}`})))
    };

    return <div>
        <button className='border-0 transparent grey h6' onClick={() => removeColumn(column.id)}>remove</button>
    </div>
};

export default RemoveColumnButton