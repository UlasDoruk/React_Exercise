import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todo/todoSlice';

function Form() {

  const [title,setTitle] = useState("")

  const dispatch = useDispatch()

   const  handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addTodo({id:nanoid(),title,completed:false}))
    setTitle("")
   }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done ?"
        autoFocus
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      ></input>
    </form>
  );
}

export default Form