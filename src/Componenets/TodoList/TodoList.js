import React from 'react'
import Todos from '../Todo/Todo'
import Todo from '../Todo/Todo'

const TodoList = ({setInputText,setTodos,inputText,todos}) => {
  return (
    <div className="todo-container">


<ul className='todo-List'>
{
 
 
 todos.map((todo)=>
  
    <Todo todos={todos} setTodos={setTodos} text={todo.text} key={todo.id} todo={todo} />
  )
 }
 






 


</ul>



    </div>
  )
}

export default TodoList