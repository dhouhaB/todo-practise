import React from 'react'

const Form = ({setInputText,setTodos,inputText,todos}) => {

const submitTodoHandler=(e)=>{
  setInputText(e.target.value)}
  
  const submitHandler=(e)=>
  {
    e.preventDefault();
    setTodos([
      ...todos,
  {text:inputText,completed:false,id:Math.random()*1000 }
  /*{text:inputText,completed:false,id:Math.random()*1000 },*/

])


setInputText("");
   
  }




  const statusHandler=()=>
  {

  }







/*
const submitHandler= (e) =>
{
e.preventDefault();
setTodos([
  ...todos,
{text:inputText,completed:false,id:Math.random()*1000 },
])
setInputText("");
}
*/




  return (
    <div>
<header><h1>to do list app </h1></header>
<form >

<input type="text"   className="todo-input" onChange={submitTodoHandler}/>
<button className="todo-button"  type="submit"  onClick={submitHandler}>

<i className="fas fa-plus-square"></i>


</button>
  <div className="select">
        <select onChange={statusHandler}  name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        </div>


</form>







    </div>
  )
}

export default Form