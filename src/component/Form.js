import React from "react";

function Form({todos, setTodos, inputText, setInputText}) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
        // console.log(e.target.value);
      };
    
      const submitTodoHandler = (todo) => {
        todo.preventDefault();

        if (inputText === "") {
          alert('try to do something :)')
        } else {
        setTodos([
          ...todos,
          {
            text: inputText,
            completed: false,
            id: Math.floor(Math.random() * 1000),
          },
          
          
        ])};
        

    setInputText("");

};
  return (
    <div>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
        />
        <button
            onClick={submitTodoHandler}
          className="toggle-all"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Form;
