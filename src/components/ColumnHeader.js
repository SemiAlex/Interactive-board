import RemoveColumnButton from "./RemoveColumnButton";

function ColumnHeader({ column }) {

    return <div className="d-flex justify-content-between align-items-center">
        <input className="transparent border-0 w-100" type="text" maxlength="50" id="title-input" autoComplete="off"
        defaultValue={`${column.header}`}/><RemoveColumnButton column={column} />
        </div>
}

export default ColumnHeader