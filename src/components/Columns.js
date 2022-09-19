import { useContext, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"
import Column from "./Column"
import AddColumnButton from "./AddColumnButton"

function Columns() {
    const { columns, setColumns, setTasks } = useContext(ThemeContext);

    useEffect(() => {
        setColumns([
            { id: 0, header: 'To Do'},
            { id: 1, header: 'In Process'},
            { id: 2, header: 'Done'}
        ]);
        setTasks([  
            { id: 0, colNum: 0, header: 'Example', description: `123456789`},
            { id: 1, colNum: 0, header: 'Example 2', description: `1A2B3C4D`},
            { id: 2, colNum: 1, header: 'Example 3', description: `ABCDEFG`},
            { id: 3, colNum: 2, header: 'Example 4', description: `!#$%^&*+`}
        ]);
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