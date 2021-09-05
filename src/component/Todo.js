import React from "react";

function Todo({ text }) {
  return (
    <div>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>{text}</label>
          <button className="destroy"></button>
        </div>
      </li>
    </div>
  );
}

export default Todo;
