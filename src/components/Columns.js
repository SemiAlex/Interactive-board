import '../App.css'
import { useContext, useEffect } from "react"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import AddColumnButton from "./AddColumnButton"
import Task from './Task'
import AddTaskButton from './AddTaskButton'
import ColumnHeader from './ColumnHeader'
import ThemeContext from "../context/ThemeContext"

function Columns() {
    const { columns, setColumns, maxId, setMaxId  } = useContext(ThemeContext);

    useEffect(() => {
        setColumns([
            { id: 0, header: 'To Do', tasks: [
                { id: 0, header: 'Example', description: `123456789`},
                { id: 1, header: 'Example 2', description: `1A2B3C4D`}
            ]},
            { id: 1, header: 'In Process', tasks: [
                { id: 2, header: 'Example 3', description: `ABCDEFG`}
            ]},
            { id: 2, header: 'Done', tasks: [
                { id: 3, header: 'Example 4', description: `!#$%^&*+`}
            ]}
        ]);
        setMaxId(4);
    }, []);

    const handleOnDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;
      
        if (source.droppableId !== destination.droppableId) {
          const sourceColumn = columns[source.droppableId];
          const destColumn = columns[destination.droppableId];
          const sourceItems = [...sourceColumn.tasks];
          const destItems = [...destColumn.tasks];
         console.log(sourceItems)
        }
    }

    return <div className="d-flex justify-content-start align-items-start">
        <DragDropContext onDragEnd={result => handleOnDragEnd(result)}>
            {columns.map(column => <div className="column-width m-4" key={column.id} >
                <div className='yellow p-2 text-center rounded-top border border-bottom-0 border-secondary'>
                    <h4><ColumnHeader column={column} />{JSON.stringify(maxId)}</h4>
                </div>
                <div className='grey py-1 px-4 rounded-bottom border border-top-0 border-secondary'>
                    <Droppable droppableId={`${column.id}`} key={column.id}>
                        {(provided) => (    
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {column.tasks.map((task, index) => 
                                    <Draggable draggableId={`${task.id}`} key={`${task.id}`} index={index}>
                                        {(provided) => (
                                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                                                <Task column={column} task={task} />
                                            </div>
                                        )}
                                    </Draggable>)
                                }
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <AddTaskButton column={column} tasks={column.tasks} />
                </div>
            </div>)}
        </DragDropContext>
        <AddColumnButton />
    </div>
};

export default Columns