import { useContext, useEffect   } from "react"
import { Link } from "react-router-dom"
import ThemeContext from "../context/ThemeContext"
import AddBoard from "./AddBoard"
import RemoveBoard from "./RemoveBoard"


function Boards() {
    const { boards, setBoards, maxBoardId, setMaxBoardId } = useContext(ThemeContext)

    useEffect(() => {
        const arr = JSON.parse(localStorage.getItem('boards'));
        if (arr) {
            setBoards(arr);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(`boards`, JSON.stringify(boards));
    }, [boards]);

    useEffect(() => {
        const maxboard = JSON.parse(localStorage.getItem('maxboard'));
        maxboard > 0 ? setMaxBoardId(maxboard) : setMaxBoardId(0)
    }, []);

    useEffect(() => {
        localStorage.setItem(`maxboard`, JSON.stringify(maxBoardId));
    }, [maxBoardId]);



    return <div className="d-flex justify-content-center align-items-center h-100 w-100 text-center">
        <div>
            {boards.map(board => <div className="m-2 hover-shadow" key={board.id}>
                <Link to={`/board-${board.title}-${board.id}`} className='link-none display-6' >
                    {board.title}
                </Link>
                <RemoveBoard id={board.id} title={board.title} />
            </div>)}
            <AddBoard />
        </div>
    </div>
}

export default Boards