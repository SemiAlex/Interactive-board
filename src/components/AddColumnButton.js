function AddColumnButton({ columns, setColumns }) {

    const addColumn = () => {
        setColumns([...columns, { id: columns.length, header: 'New Column', tasks: [] }])
    };

    return <div>
        <button className="border-0 m-4 mt-5 transparent text-nowrap hover-shadow" onClick={() => addColumn()}><span className="h2">+</span> Add New Column</button>
    </div>
};

export default AddColumnButton