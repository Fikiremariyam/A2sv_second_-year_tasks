import { useState } from 'react'
import {FaPen, FaClipboard, FaClipboardList} from 'react-icons/fa'
import TodoList from './components/TodoList'
import './css/App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <div className="header">
        <div className="logoside">
      <FaPen/>
      <h1>Todo List</h1>
      <FaClipboardList/>

      </div>
    </div>
      <TodoList/>
      
    </div>    
  );
}

export default App
