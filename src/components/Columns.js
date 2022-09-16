import { useContext, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"
import Column from "./Column"

function Columns() {
    const {columns, setColumns} = useContext(ThemeContext)

    useEffect(() => {
        setColumns([
            {id: 0, header: 'To Do'},
            {id: 1, header: 'In Process'},
            {id: 2, header: 'Done'}
        ])
    }, [])

    const addColumn = () => {
        setColumns([...columns, {id: columns.length, header: 'New Column'}])
    }

    const removeColumn = id => {
        setColumns(columns.filter(column => !(id === column.id)))
    }

    return <div className="d-flex justify-content-start align-items-center">
        {columns.map(column => <Column
            key={column.id}
            column={column}
            removeColumn={removeColumn}
        />)}
        <div>
            <button className="borderless" onClick={() => addColumn()}>+</button>
        </div>
    </div>
}

export default Columns