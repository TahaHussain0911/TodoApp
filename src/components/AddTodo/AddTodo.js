import React,{useContext} from 'react'
import './AddTodo.css'
import todoContext from '../../context/todoContext'
const AddTodo = () => {
  const getContext=useContext(todoContext);
  const {handleClick,onChange,input,handleKey}=getContext;
  return (
    <div className='search-box' >
      <form action="" onSubmit={handleClick}>
        <input type="text" name="search" id="search" onKeyDown={handleKey} placeholder='Add Todo' value={input} onChange={onChange} required/>
        <button className='btn'>Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo