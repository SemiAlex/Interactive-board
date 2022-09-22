import '../App.css'
import { useContext, useEffect } from "react"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import AddColumnButton from "./AddColumnButton"
import Task from './Task'
import AddTaskButton from './AddTaskButton'
import ColumnHeader from './ColumnHeader'
import ThemeContext from "../context/ThemeContext"

function Columns() {
    const { tasks, setTasks, columns, setColumns } = useContext(ThemeContext);

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

    function handleOnDragEnd(result, columns, setColumns) {
        console.log(result)
        const { source, destination } = result;

        if (!result.destination) return;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
              ...columns,
              [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
              },
              [destination.droppableId]: {
                ...destColumn,
                items: destItems
              }
            });
          } else {
        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setTasks(items);
        }
    }

    return <div className="d-flex justify-content-start align-items-start">
        <DragDropContext onDragEnd={result => handleOnDragEnd(result)}>
            {columns.map(column => <div className="column-width m-4" key={column.id} >
                <div className='yellow p-2 text-center rounded-top border border-bottom-0 border-secondary'>
                    <h4><ColumnHeader column={column} /> {column.id}</h4>
                </div>
                <div className='grey py-1 px-4 rounded-bottom border border-top-0 border-secondary'>
                    <Droppable droppableId={`${column.id}`} key={column.id}>
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {tasks.map((task, index) => task.colNum === column.id ?
                                    <Draggable draggableId={`${task.id}`} key={task.id}  index={index}>
                                        {(provided) => (
                                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                                                <Task column={column} task={task} />
                                            </div>
                                        )}
                                    </Draggable> : '')
                                }
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <AddTaskButton column={column} />
                </div>
            </div>)}
        </DragDropContext>
        <AddColumnButton />
    </div>
};

export default Columns