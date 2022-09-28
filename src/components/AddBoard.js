import { useState, useRef, useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function AddBoard () {
    const {boards, setBoards} = useContext(ThemeContext);
    const inputRef = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
    }

    const add = () => {
        const boardTitle = inputRef.current.value;
        setBoards([...boards, {id: boards.length, title: boardTitle}])
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit" onClick={() => add()}>Submit</button>
    </form>
}

export default AddBoard