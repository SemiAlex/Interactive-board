import '../App.css'
import { useState, useEffect } from "react"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import AddColumnButton from "./AddColumnButton"
import Task from './Task'
import AddTaskButton from './AddTaskButton'
import ColumnHeader from './ColumnHeader'

function Board({ board }) {
    
    const [columns, setColumns] = useState(() => {
        const col = JSON.parse(localStorage.getItem(`board-${board.title}-${board.id}`));
        if (col) {
            return col
        } else {
            return []
        }
    });

    const [maxId, setMaxId ] = useState(() => {
        const maxtask = JSON.parse(localStorage.getItem(`maxtask-${board.title}-${board.id}`));
        if (maxtask > 0) {
            return maxtask
        } else {
            return 0
        }
    });

    useEffect(() => {
        localStorage.setItem(`board-${board.title}-${board.id}`, JSON.stringify(columns));
      }, [columns]);

      useEffect(() => {
        localStorage.setItem(`maxtask-${board.title}-${board.id}`, JSON.stringify(maxId));
      }, [maxId]);

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
            {columns.map(column => <div className="column mx-4" key={column.id} >
                <div className='blue p-2 text-center rounded-top'>
                    <h4><ColumnHeader column={column} columns={columns} setColumns={setColumns} /></h4>
                </div>
                <div className='light-grey py-1 px-4'>
                    <Droppable droppableId={`${column.id}`} key={column.id}>
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {column.tasks.map((task, index) =>
                                    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
                                        {(provided) => (
                                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                                                <Task column={column}
                                                    task={task}
                                                    columns={columns}
                                                    setColumns={setColumns} />
                                            </div>
                                        )}
                                    </Draggable>)
                                }
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <AddTaskButton column={column}
                        tasks={column.tasks}
                        columns={columns}
                        setColumns={setColumns} maxId={maxId}
                        setMaxId={setMaxId} />
                </div>
            </div>)}
        </DragDropContext>
        <AddColumnButton columns={columns} setColumns={setColumns} />
    </div>
};

export default Board