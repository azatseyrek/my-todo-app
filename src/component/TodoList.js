import React from "react";
import Todo from "./Todo";

function TodoList({todos}) {
  return (
    <div className="main">
   
      <ul className="todo-list">
      {todos.map(todo => (
          <Todo text = {todo.text} key={todo.id}/>
      ))}
      </ul>
    </div>
  );
}

export default TodoList;
