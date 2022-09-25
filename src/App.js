import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Board from './components/Board';
import Home from './components/Home';

function App() {
  const [columns, setColumns] = useState([]);
  const [maxId, setMaxId ] = useState(0);

  return (
    <div className='light-grey vh-100'>
      <ThemeContext.Provider value={{ columns, setColumns, maxId, setMaxId }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/registration" element={<Board />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
