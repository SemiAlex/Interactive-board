import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function RemoveColumnButton({ column, columns, setColumns }) {

    const removeColumn = id => {
        setColumns(columns.filter(column => !(id === column.id)).map(column => ({...column, id: column.id > id ? column.id-1 : column.id})));
    };

    return <div>
        <button className='border-0 transparent grey h6' onClick={() => removeColumn(column.id)}>X</button>
    </div>
};

export default RemoveColumnButton