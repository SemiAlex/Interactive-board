import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function RemoveBoard({ id, title }) {

    const { boards, setBoards } = useContext(ThemeContext)
    
    const remove = () => {
        setBoards(boards.filter(board => !(board.id === id)));
        localStorage.removeItem(`${title}${id}`);
    }

    return <button onClick={() => remove()} className="border-0 transparent">X</button>
}

export default RemoveBoard