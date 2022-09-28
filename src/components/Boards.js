import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import AddBoard from "./AddBoard"
import { Link } from "react-router-dom"

function Boards() {
    const {boards, setBoards} = useContext(ThemeContext)

    return <div className="d-flex justify-content-center align-items-center h-100 w-100 text-center">
        <div>
        {boards.map(board => <Link to={`/board-${board.title}`} className='link-none display-6 mx-4' key={board.id}>{board.title}</Link>)}
        <AddBoard />
        {JSON.stringify(boards)}
        </div>
    </div>
}

export default Boards