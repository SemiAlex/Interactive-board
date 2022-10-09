import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function RemoveBoard({ id, title }) {

    const { boards, setBoards } = useContext(ThemeContext)
    
    const remove = () => {
        setBoards(boards.filter(board => !(board.id === id)));
        localStorage.removeItem(`${title}${id}`);
    }

    return <button onClick={() => remove()} className="border-0 transparent text-white">
        <FontAwesomeIcon icon={faXmark} />
    </button>
}

export default RemoveBoard