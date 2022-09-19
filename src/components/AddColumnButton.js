import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function AddColumnButton() {
    const {columns, setColumns} = useContext(ThemeContext);

    const addColumn = () => {
        setColumns([...columns, {id: columns.length, header: 'New Column', edit: false}])
    };

    return <div>
        <button className="border-0 m-4 transparent" onClick={() => addColumn()}><span className="h2">+</span> Add New Column</button>
    </div>
};

export default AddColumnButton