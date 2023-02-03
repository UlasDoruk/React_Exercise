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
    }
  },
});

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer;
