function TaskHeader({ task }) {

    return <input className="transparent border-0 w-100 text-white font-weight-bold" style={{fontWeight: "bold"}} type="text" maxlength="50"
        defaultValue={`${task.header}`} />
}

export default TaskHeader