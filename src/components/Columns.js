import { useContext, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"
import Column from "./Column"
import AddColumnButton from "./AddColumnButton"

function Columns() {
    const { columns, setColumns } = useContext(ThemeContext);

    useEffect(() => {
        setColumns([
            { id: 0, header: 'To Do', edit: false },
            { id: 1, header: 'In Process', edit: false },
            { id: 2, header: 'Done', edit: false }
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