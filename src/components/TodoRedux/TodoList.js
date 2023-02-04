import React from 'react'
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { isCompleted,deleteTodo} from '../../redux/todo/todoSlice';

  

function TodoList() {

    let filtered = [];
    let dispatch = useDispatch()

    const items = useSelector((state) => state.todos.items)
    const activeFilter = useSelector((state) => state.todos.activeFilter)

    filtered = items
    if (activeFilter !== "all") {
      filtered = items.filter((todo) =>
        activeFilter === "active"
          ? todo.completed === false 
          : todo.completed === true 
      );
    }
    

  return (
    <>
        <ul className="todo-list">
          {filtered.map((item)=>(
            <li className={item.completed ? "completed" : ""} key={item.id}>
              <div className="view">
                <input className="toggle" type="checkbox" onChange={()=>dispatch(isCompleted({id: item.id}))} />
                <label>{item.title}</label>
                <button className="destroy" onClick={()=>dispatch(deleteTodo({id : item.id}))}></button>
              </div>
            </li>
          ))}
        </ul>
    </>
  );
}

export default TodoList