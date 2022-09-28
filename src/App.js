import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Board from './components/Board';
import Boards from './components/Boards';
import Home from './components/Home';
import Registration from './components/Registration';
import About from './components/About';

function App() {
  const [maxId, setMaxId ] = useState(0);
  const [profile, setProfile] = useState({email: '', password: ''});
  const [boards, setBoards] = useState([]);

  return (
    <div className='full-screen'>
      <ThemeContext.Provider value={{ maxId, setMaxId, boards, setBoards, profile, setProfile }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boards" element={<Boards />} />
          {boards.map(board => <Route key={board.id} path={`/board-${board.title}`} element={<Board board={board} key={board.id} />} />)}
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
