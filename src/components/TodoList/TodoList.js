import React, { useContext, useRef } from "react";
import "./TodoList.css";
import todoContext from "../../context/todoContext";
const TodoList = (props) => {
  const getContext = useContext(todoContext);
  const { deleteTodo, editTodo, cinput, setcinput, updateTodo, handleKey,alertFunc } =
    getContext;
  const modalRef = useRef(null);
  const CloseRef = useRef(null);
  const handleClick = (id) => {
    editTodo(id);
    // console.log(input)
  };
  const onCHange = (e) => {
    setcinput({ ...cinput, search: e.target.value });
  };
  //this will block incase if a blank todo is changed in saved changes
  let regex=/\S.*/;
  const saveEdit = () => {
    if(regex.test(cinput.search)){
      CloseRef.current.click();
      updateTodo(cinput.id, cinput.search);
    }
    else{
      alertFunc("danger","Input field Blank");

    }
    // console.log(cinput);
  };
  return (
    <div className="todo-list">
      <div className="box">
        <p>{props.text}</p>
        <div className="icons">
          <i
            className="fa-solid fa-pen-to-square"
            onClick={() => {
              handleClick(props.id);
              modalRef.current.click();
            }}
          ></i>
          <i
            className="fa-solid fa-trash-can"
            onClick={() => deleteTodo(props.id)}
          ></i>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary d-none"
        ref={modalRef}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Changes
              </h1>
              {/* <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
            </div>
            <form action="">
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="esearch"
                  aria-describedby="emailHelp"
                  value={cinput.search}
                  onKeyDown={handleKey}
                  onChange={onCHange}
                  required
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  ref={CloseRef}
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={saveEdit}
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
