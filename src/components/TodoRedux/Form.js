import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodoAsync } from "../../redux/todo/todoSlice";

function Form() {

  const [title,setTitle] = useState("")

  const dispatch = useDispatch()

   const  handleSubmit= async(e)=>{
    e.preventDefault()
    await dispatch(addTodoAsync({ title }));
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