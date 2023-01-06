import './App.css';
import React from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoState from './context/TodoState';
import Alert from './components/Alert';
function App() {
  return (
    <>
    <TodoState>
      <TodoForm />
    <Alert/>
    </TodoState>
    </>
    );
}

export default App;
