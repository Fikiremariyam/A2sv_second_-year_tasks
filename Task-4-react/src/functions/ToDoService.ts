import TodoTypes from './objects/todo'
const LOCAL_STORAGE_KEY = 'todos'

const Todoservice =
{
    getTodos: ():TodoTypes[]=>{
        const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY)
    return todoStr ? JSON.parse(todoStr) : [];
 
    },
    //adding todos
    addTodos: (text:string): TodoTypes =>{
        const todos = Todoservice.getTodos();

        const newTodo : TodoTypes = { id:todos.length + 1, text , completed : false };
        const updateTodos = [...todos, newTodo];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));

        return newTodo;
    },
    //Updating the Todo
    updateTodo: (todo:TodoTypes): TodoTypes => {
        const todos = Todoservice.getTodos();
        const updateTodos = todos.map((task)=> (task.id ===todo.id? todo:task)) ;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
        return todo;


    },
    //Deleting the Todo
    deleteTodo: (id:number): void =>{
        const todos = Todoservice.getTodos();
        const newToDos = todos.filter((task) => task.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newToDos));
    }

    
};
  export default Todoservice;