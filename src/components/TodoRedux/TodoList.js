import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { isCompleted,deleteTodo} from '../../redux/todo/todoSlice';

function TodoList() {

    let dispatch = useDispatch()

    const items = useSelector((state) => state.todos.items)

  return (
    <>
        <ul className="todo-list">
          {items.map((item)=>(
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