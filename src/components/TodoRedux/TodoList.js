import React from 'react'
import {useSelector} from "react-redux"

function TodoList() {

    const data = useSelector((state) => state.todos.items)

    console.log(data)

  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Learn JavaScript</label>
              <button className="destroy"></button>
            </div>
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Learn React</label>
              <button className="destroy"></button>
            </div>
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Have a life!</label>
              <button className="destroy"></button>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default TodoList