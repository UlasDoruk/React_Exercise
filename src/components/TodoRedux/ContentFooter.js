import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { clearCompleted,activated } from '../../redux/todo/todoSlice';

function ContentFooter() {

	let dispatch = useDispatch()

	const items = useSelector((state)=>state.todos.items)
	const leftItems = items.filter((e) => e.completed === false).length;

	const activeFilter = useSelector((state) => state.todos.activeFilter);

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{leftItems}</strong> item{leftItems > 1 && "s"} left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              className={activeFilter === "all" ? "selected" : ""}
              onClick={() => dispatch(activated("all"))}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeFilter === "active" ? "selected" : ""}
              onClick={() => dispatch(activated("active"))}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeFilter === "completed" ? "selected" : ""}
              onClick={() => dispatch(activated("completed"))}
            >
              Completed
            </a>
          </li>
        </ul>

        <button
          className="clear-completed"
          onClick={() => dispatch(clearCompleted())}
        >
          Clear completed
        </button>
      </footer>
    </>
  );
}

export default ContentFooter