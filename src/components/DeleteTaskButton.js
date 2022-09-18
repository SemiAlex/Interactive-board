import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function DeleteTaskButton({ task }) {
    const { tasks, setTasks } = useContext(ThemeContext);

    const deleteTask = () => {
        setTasks(tasks.filter(element => !(element.id === task.id)))
    };

    return <button className="border-0 transparent" onClick={() => deleteTask()}><h5 className="text-white">X</h5></button>
}

export default DeleteTaskButton