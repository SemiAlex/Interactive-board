import '../App.css'
import { useContext, useEffect } from "react"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import AddColumnButton from "./AddColumnButton"
import Task from './Task'
import AddTaskButton from './AddTaskButton'
import ColumnHeader from './ColumnHeader'
import ThemeContext from "../context/ThemeContext"

function Board() {
    const { columns, setColumns, maxId, setMaxId  } = useContext(ThemeContext);

    useEffect(() => {
        setColumns([
            { id: 0, header: 'To Do', tasks: [
                { id: 0, header: 'Example 1', description: `123456789`},
                { id: 1, header: 'Example 2', description: `1A2B3C4D`}
            ]},
            { id: 1, header: 'In Process', tasks: [
                { id: 2, header: 'Example 3', description: `ABCDEFG`}
            ]},
            { id: 2, header: 'Done', tasks: [
                { id: 3, header: 'Example 4', description: `!#$%^&*+`}
            ]}
        ]);
        setMaxId(maxId+4);
    }, []);

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceTasks = [...sourceColumn.tasks];
            const destTasks = [...destColumn.tasks];
            const [removed] = sourceTasks.splice(source.index, 1);
            destTasks.splice(destination.index, 0, removed);
            setColumns(columns.map(column => column.id == source.droppableId ?
                { ...sourceColumn, tasks: sourceTasks } : column.id == destination.droppableId ?
                    { ...destColumn, tasks: destTasks } :
                    { ...column }));
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.tasks];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns(
                columns.map(column => column.id == source.droppableId ? {
                    ...column,
                    tasks: copiedItems
                } : { ...column })
            );
        }
    };

    return <div className="ms-5 header-placeholder d-flex justify-content-start align-items-start">
        <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
            {columns.map(column => <div className="column m-4" key={column.id} >
                <div className='yellow p-2 text-center rounded-top border border-bottom-0 border-secondary'>
                    <h4><ColumnHeader column={column} /></h4>
                </div>
                <div className='grey py-1 px-4 rounded-bottom border border-top-0 border-secondary'>
                    <Droppable droppableId={`${column.id}`} key={column.id}>
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {column.tasks.map((task, index) =>
                                    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
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

export default Board