import React,{useContext} from 'react'
import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'
import './TodoForm.css'
import todoContext from '../../context/todoContext'
const TodoForm = () => {
  const getContext=useContext(todoContext)
  const {text}=getContext
  return (
    <div className="container">
      <h1 className='text-center mb-4'>My Todo</h1>
        <AddTodo/>
        <div className="container-box mt-4">
        <h4 className='mx-2'>Your Tasks</h4>
        </div>
        <div className="todo-container">
        {text.length===0 && <div className='empty-container'><p> Add Tasks to your todo </p></div>}
        {text.map((element)=>{
          return <TodoList text={element.search} key={element.id} id={element.id} element={element}/>
        })}        
        </div>
    </div>
    )
}

export default TodoForm