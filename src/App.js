import React,{useState} from 'react'
import './App.css'
import './Componenets/Form/Form'
import Form from './Componenets/Form/Form'
import TodoList from './Componenets/TodoList/TodoList'
const App = () => {

const [inputText,setInputText]= useState()
const [todos,setTodos]= useState([])



  return (
    <div>
    <h1>{inputText}</h1>
 
<Form setInputText={setInputText} setTodos={setTodos} inputText={inputText} todos={todos} />
<TodoList setInputText={setInputText} setTodos={setTodos} inputText={inputText} todos={todos} />



    </div>
  )
}

export default App