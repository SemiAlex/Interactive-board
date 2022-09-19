function TaskDescription({ task }) {

    return <input className="transparent border-0 w-100" type="text" maxlength="50"
         defaultValue={`${task.description}`} />
}

export default TaskDescription