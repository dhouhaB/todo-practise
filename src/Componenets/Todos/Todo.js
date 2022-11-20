import React from 'react'

const Todos = ({text,todos,todo,setTodos}) => {
/*
const deleteHandler=()=>
{

  setTodos( todos.filter(word => word.id !== todo.id))
}*/
const deleteHandler =() =>
  {
setTodos(todos.filter((el)=>el.id!== todo.id))
  };



  return (
    <div>

<div className="todo">
    <li >{text}</li>

    <button ><i className='fas fa-check'></i></button>
    <button onClick={deleteHandler} ><i className='fas fa-trash'></i></button>
    
       </div>



    </div>
  )
}

export default Todos