import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function RemoveColumnButton({ column, columns, setColumns }) {

    const removeColumn = id => {
        setColumns(columns.filter(column => !(id === column.id)).map(column => ({...column, id: column.id > id ? column.id-1 : column.id})));
    };

    return <div>
        <button className='border-0 transparent text-white' onClick={() => removeColumn(column.id)}>
            <FontAwesomeIcon icon={faXmark} />
        </button>
    </div>
};

export default RemoveColumnButton