import React from 'react'

function Form() {
  return (
    <form>
      <input
        className="new-todo"
        placeholder="What needs to be done ?"
        autoFocus
      ></input>
    </form>
  );
}

export default Form