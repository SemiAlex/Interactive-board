import '../App.css'
import Task from './Task'
import AddTaskButton from './AddTaskButton'
import ColumnHeader from './ColumnHeader'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Column({ column }) {
    const { tasks, setTasks, columns } = useContext(ThemeContext);

    function handleOnDragEnd(result) {
        console.log(result)
        if (!result.destination) return;
        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setTasks(items);
      }

    return <div className="column-width m-4">
        <div className='yellow p-2 text-center rounded-top border border-bottom-0 border-secondary'>
            <h4><ColumnHeader column={column} /> {column.id}</h4>
        </div>
        <div className='grey py-1 px-4 rounded-bottom border border-top-0 border-secondary'>
            <DragDropContext onDragEnd={result => handleOnDragEnd(result)}>
                <Droppable droppableId={`${column.id}`} key={column.id}>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {tasks.map((task, index) => task.colNum === column.id ?
                                <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                                    {(provided) => (
                                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            <Task column={column} task={task} />
                                        </div>
                                    )}
                                </Draggable> : '')
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <AddTaskButton column={column} />
        </div>
    </div>
}

export default Column

//<Draggable key={id} draggableId={id} index={index}></Draggable>