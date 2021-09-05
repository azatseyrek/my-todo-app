import "./App.css";
import Form from "./component/Form";
import React, { useState } from "react";
import TodoList from "./component/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

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

      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
