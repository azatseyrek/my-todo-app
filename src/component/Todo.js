import React from "react";

function Todo({ text, todo, todos, setTodos }) {
  //Events

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(todos.map((item) => {
        if(item.id === todo.id) {
          return {
            ...item, completed: !item.completed
          }
        } 
        return item;

    }))
  }

  return (
    <div>
      <li>
        <div className="view">
          <input onClick={completeHandler} className="toggle" type="checkbox" />
          <label className = {`${todo.completed ? "completed" : ""}`}>{text}</label>
          <button onClick={deleteHandler} className="destroy"></button>
        </div>
      </li>
    </div>
  );
}

export default Todo;
