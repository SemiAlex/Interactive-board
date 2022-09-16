import '../App.css'

function Column({column, removeColumn}) {
    return <div className="column-style m-4">
        <div className='red p-2 text-center d-flex justify-content-between'>
            <h4>{column.header}</h4>
            {column.id === 0 ? '' : <button className='borderless grey' onClick={() => removeColumn(column.id)}>remove</button>}
        </div>
        <div className='grey py-2 px-4 column-height'>
            <p>Tasks will be here</p>
        </div>
    </div>
}

export default Column