import { useContext, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"
import Column from "./Column"
import AddColumnButton from "./AddColumnButton"

function Columns() {
    const { columns, setColumns } = useContext(ThemeContext);

    useEffect(() => {
        setColumns([
            { id: 0, header: 'To Do' },
            { id: 1, header: 'In Process' },
            { id: 2, header: 'Done' }
        ])
    }, []);

    return <div className="d-flex justify-content-start align-items-start">
        {columns.map(column => <Column
            key={column.id}
            column={column}
        />)}
        <AddColumnButton />
    </div>
};

export default Columns