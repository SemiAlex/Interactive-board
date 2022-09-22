import './App.css';
import { useEffect, useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Columns from './components/Columns';

function App() {
  const [columns, setColumns] = useState([]);
  const [maxId, setMaxId ] = useState(0);
  const [tasks, setTasks] = useState(columns.tasks)

  return (
    <div className='light-grey background-height'>
      <ThemeContext.Provider value={{ columns, setColumns, maxId, setMaxId, tasks, setTasks }}>
        <Header />
        {JSON.stringify(columns)}
        <Columns />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
