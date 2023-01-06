import React,{useContext} from 'react'
import todoContext from '../context/todoContext'
const Alert = () => {
  const getContext=useContext(todoContext);
  const {alert}=getContext;
  return (
    <>
        <div class={`alert alert-class ${alert.colour}`} role="alert">
            {alert.msg}
        </div>
    </>
  )
}

export default Alert