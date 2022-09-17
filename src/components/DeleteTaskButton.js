import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function DeleteTaskButton() {
    const {tasks, setTasks} = useContext(ThemeContext);

    const deleteTask = id => {
        setTasks(tasks.filter(task => !(id === task.id)))
    };


    return <button className="border-0 transparent" onClick={deleteTask}><h5 className="text-white">X</h5></button>
}

export default DeleteTaskButton