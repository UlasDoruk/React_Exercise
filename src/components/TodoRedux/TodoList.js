import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAsync,getTodoAsync,deleteTodoAsync} from '../../redux/todo/todoSlice';

function TodoList() {

    let filtered = [];
    let dispatch = useDispatch()

    const items = useSelector((state) => state.todos.items)
    const activeFilter = useSelector((state) => state.todos.activeFilter)
    const error = useSelector((state)=>state.todos.error)
    const loading = useSelector((state)=>state.todos.isLoading)

    useEffect(()=>{
      dispatch(getTodoAsync()) 
    },[dispatch])

    const handleRemove = async(id)=>{
      await dispatch(deleteTodoAsync(id))
    }

    const handleToggle = async(id,completed)=>{
      await dispatch(toggleTodoAsync({id,data:{completed}}))
    }

    filtered = items
    if (activeFilter !== "all") {
      filtered = items.filter((todo) =>
        activeFilter === "active"
          ? todo.completed === false 
          : todo.completed === true 
      );
    }

    if(loading)
      return <div style={{padding:16}}>Loading...</div>
    else if(error)
       return <div style={{ padding: 16 }}>{error}</div>
    
  return (
    <>
      <ul className="todo-list">
        {error ? "error" : ""}
        {filtered.map((item) => (
          <li className={item.completed ? "completed" : ""} key={item.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={() => handleToggle(item.id,!item.completed)}
              />
              <label>{item.title}</label>
              <button
                className="destroy"
                onClick={() => handleRemove(item.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList