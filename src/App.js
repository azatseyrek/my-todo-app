import "./App.css";
import Form from "./component/Form";
import React, { useState, useEffect } from "react";
import TodoList from "./component/TodoList";

function App() {




  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useEffect

  useEffect(() => {

    console.log('status degisti');
    filterHandle();

}, [todos, status])

  

  //Functions

  const filterHandle = () => {

    switch(status) {
      case "completed" :
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case "active" :
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;

        default:
          setFilteredTodos(todos);
          break;


    }

  }




  return (
    <div className="todoapp">
      <header className="header">
        <h1> todos </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />

      <TodoList
        setStatus={setStatus}
        status={status}
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
      />
    </div>
  );
}

export default App;
