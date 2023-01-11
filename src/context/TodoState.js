import React, { useState } from "react";
import todoContext from "./todoContext";
const TodoState = (props) => {
  //main array for todos
  const [text, settext] = useState([]);
  //will contain and id and text of the innput field
  const [todo, settodo] = useState({});
  const [input, setinput] = useState("");
  
  //Change input hook
  const [cinput, setcinput] = useState({});
  let r = /^\S.+/;

  //add to todo function
  const handleClick = (e) => {
    e.preventDefault();
    if (r.test(input)) {
      //add todo click will expand the todo object in the text array
      settext([...text, todo]);
      // console.log(text);
      setinput("");
      alertFunc("change-class", "Todo Added Successfully");
    }
    else{
        alertFunc("change-class", "First Spaces Not Allowed");
    }
    console.log(text);
    //after the click input will be set to blank
  };
  const onChange = (e) => {
    // console.log(e.target.value)
    setinput(e.target.value);
    // console.log(input);
    settodo({
      ...todo,
      [e.target.name]: e.target.value,
      id: Math.floor(Math.random() * 1000),
    });
  };

  //Delete the todo
  const deleteTodo = (id) => {
    settext(
      text.filter((value) => {
        return value.id !== id;
      })
    );
    alertFunc("change-class", "Todo Deleted Successfully");
  };

  //will get the object of selected index
  const editTodo = (id) => {
    const array = text.filter((value) => {
      return value.id === id;
    });
    // console.log(array[0].search);
    setcinput({ search: array[0].search, id: array[0].id });
  };
  const updateTodo = (id, change) => {
    // console.log(id,change);
    let newTodo = JSON.parse(JSON.stringify(text));
    // a copy of text array created so that we can change the text at the
    // selected id
    for (let index = 0; index < newTodo.length; index++) {
      const element = newTodo[index];
      if (element.id === id) {
        newTodo[index].search = change;
        break;
      }
    }
    // console.log(newTodo);
    settext(newTodo);
    alertFunc("change-class", "Todo Edited Successfully");
  };

  //Function for blocking first input character to be space
  const handleKey = (e) => {
    if (e.target.value.length === 0 && e.keyCode===32) {
      alertFunc("change-class", "First Space not Allowed");
      e.preventDefault();
    }
    // setinputValue(e.target.value);
  };
  const [alert, setalert] = useState({});
  const alertFunc = (color, messsage) => {
    setalert({
      colour: color,
      msg: messsage,
    });
    setTimeout(() => {
      setalert({});
    }, 2500);
  };
  return (
    <todoContext.Provider
      value={{
        handleClick,
        onChange,
        text,
        input,
        deleteTodo,
        editTodo,
        cinput,
        setcinput,
        updateTodo,
        handleKey,
        alertFunc,
        alert,
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoState;
