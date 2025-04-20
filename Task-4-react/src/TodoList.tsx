import {useState} from 'react'
import { FaCheck,FaEdit } from 'react-icons/fa';
import TodoTypes from './objects/todo.ts';
import Todoservice from './functions/ToDoService.ts'
import { GiCancel } from 'react-icons/gi';
import { RiDeleteBin5Fill } from 'react-icons/ri'
import './css/TodoList.css'

import  TodoForm  from './components/Todo/todoform.tsx'

const TodoList = () => {
    
    const [todos,setTodos] = useState<TodoTypes[]>(Todoservice.getTodos());
    const [editingTodoId, setEditedTodoId] = useState<number | null>(null);
    const[edetedTodoText , setEdetedTodoText] = useState<string>("");
    //functions for handling edit Actions 

    const handleEditStart = (id: Number,text:String) => {
      setEditedTodoId(id as number);
      setEdetedTodoText(text as string);

    }

    const handleEditCancel = () => {
      setEditedTodoId(null);
      setEdetedTodoText("");

    }

    const handleEditSave = (id:number) => {
      if(edetedTodoText.trim() != '' ){
        const updateToDo = Todoservice.updateTodo({
          id,
          text:edetedTodoText,
          completed:false,
        });
        setTodos((prevTodos)=> prevTodos.map((todo) => (todo.id==id  ? updateToDo: todo))
      );
      setEditedTodoId(null)
      setEdetedTodoText("");


      }

    };

     const handleDeleteTodo = (id: number) => {
      Todoservice.deleteTodo(id);
      setTodos((prevTodo)=> prevTodo.filter((todo)=> todo.id != id ))

     }

    return  <div  className ="todoContainer" >
      <div ><TodoForm setTodos = {setTodos }/></div>

      
      { todos.map((todo)=>(

        <div className='items' key={todo.id}>

          {editingTodoId == todo.id ? (
            <div className='editedText'>
             
              <input type='text' 
              value={edetedTodoText} 
              onChange = {(e) => setEdetedTodoText(e.target.value)}
              autoFocus ={true}
                />
                <button onClick={()=>handleEditSave(todo.id)}>
                  <FaCheck/>

                </button>

                <button onClick={()=> handleEditCancel() }>
                <GiCancel/>
                </button>

              
              </div>
          ): 
          <div className="editBtn">
          
            <span>
              {todo.text}</span>
              <button onClick={() => handleEditStart(todo.id,todo.text)}>
              <FaEdit/>


              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>
                <RiDeleteBin5Fill/>
              </button>

            
          </div>
          }
          
        </div>

          ))
          }
       
           
        </div>

  
         
      }
   

export default TodoList
