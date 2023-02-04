import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: 1,
        title: "Learn React.js",
        completed: false,
      },
      {
        id: 2,
        title: "Read a Book...",
        completed: false
      },
    ],
  },
  reducers: {
    addTodo : (state,action)=>{
    state.items.push(action.payload); 
    },
    isCompleted : (state,action)=>{
      const {id} = action.payload
      const item = state.items.find((item) => item.id === id)
      item.completed = !item.completed
    },
    deleteTodo : (state,action)=>{
      const {id} = action.payload
      const item = state.items.filter((item)=>item.id !== id)
      state.items = item
    }
  },
});

export const {addTodo,isCompleted,deleteTodo} = todoSlice.actions
export default todoSlice.reducer;
