import React, { useEffect } from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, setStatus, status, filteredTodos }) {
  const statusHandler = (e) => {
    // console.log(e.target.name);

    // console.log(todos.length);

    setStatus(e.target.name);
  };

  const deleteCompletedTodos = () => {
    setTodos(todos.filter((el) => el.completed === false));
  };



  return (
    <div className="main">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>

      <footer className="footer">
        <span className="todo-count">
          <strong>{filteredTodos.length}  </strong>
          {filteredTodos.length <= 1  ? "item left" : "items left" }
        </span>

        <ul onClick={statusHandler} className="filters">
          <li>
            <a
              href="#0"
              name="all"
              className={`${status === "all" ? "selected" : ""}`}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#0"
              name="active"
              className={`${status === "active" ? "selected" : ""}`}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#0"
              name="completed"
              className={`${status === "completed" ? "selected" : ""}`}
            >
              Completed 
            </a>
          </li>
        </ul>

        <button onClick={deleteCompletedTodos} className="clear-completed">
          Clear Completed
        </button>
      </footer>
    </div>
  );
}

export default TodoList;
