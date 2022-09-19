import '../App.css'
import Tasks from './Tasks'
import AddTaskButton from './AddTaskButton'
import ColumnHeader from './ColumnHeader'

function Column({ column }) {

    return <div className="column-width m-4">
        <div className='yellow p-2 text-center rounded-top border border-bottom-0 border-secondary'>
            <h4><ColumnHeader column={column} /></h4>
        </div>
        <div className='grey py-1 px-4 rounded-bottom border border-top-0 border-secondary'>
            <Tasks column={column} />
            <AddTaskButton column={column} />
        </div>
    </div>
}

export default Column