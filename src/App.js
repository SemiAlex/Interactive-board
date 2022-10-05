import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Board from './components/Board';
import Boards from './components/Boards';
import Home from './components/Home';
import Registration from './components/Registration';
import About from './components/About';

function App() {

  const [maxBoardId, setMaxBoardId] = useState(0);
  const [boards, setBoards] = useState([]);
  const [profile, setProfile] = useState({email: '', password: ''});

  document.body.style = `background-image: url(https://images.unsplash.com/photo-1596367407372-96cb88503db6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;`;

  useEffect(() => {
    const acc = JSON.parse(localStorage.getItem('profile'));
    if (acc) {
      setProfile(acc);
    }
  }, []);

  return (
      <div className={'background-style'}>
        <ThemeContext.Provider value={{ boards, setBoards, profile, setProfile, maxBoardId, setMaxBoardId }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boards" element={<Boards />} />
            {boards.map(board => <Route key={board.id} path={`/board-${board.title}-${board.id}`} element={<Board board={board} key={board.id} />} />)}
            <Route path="/registration" element={<Registration />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ThemeContext.Provider>
      </div>
  );
}

export default App;
