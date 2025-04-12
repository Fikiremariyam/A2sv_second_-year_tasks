import React,{Dispatch, SetStateAction, useState} from 'react'
import Todoservice from '../ToDoService'
import TodoTypes from '../todo'
import '../css/todoform.css'


interface PropTypes {
    setTodos : Dispatch<SetStateAction<TodoTypes[]>>
}

 const TodoForm : React.FC<PropTypes> = ({setTodos}) => {
    
    const [newTodoText , setNewTodoText ] = useState<string>("");
     
    const handleAddTodo = () => {
        
        
            if ( newTodoText.trim() !== "" ) 
                {
                    const newTodo = Todoservice.addTodos(newTodoText);
                    setTodos ( (prevTodo) => [...prevTodo,newTodo])
                    setNewTodoText("");
            }
    }
   
    return <div className="inputForm ">
        <input type = "text" value ={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value )}
        autoFocus = {true}
        placeholder='Add a new Todo...'

        />
    <button  onClick={handleAddTodo }> Add Todo</button>
        
        
        </div>
    
        
 
}
 export default TodoForm