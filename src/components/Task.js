import React from "react";

function Task({ key, category, text, handleDeleteTask }) {

  function handleClick() {
    handleDeleteTask(text);
    
  } 

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
