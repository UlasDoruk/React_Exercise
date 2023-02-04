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
        completed: false,
      },
    ],
    activeFilter :"all"
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    isCompleted: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const item = state.items.filter((item) => item.id !== id);
      state.items = item;
    },activated : (state,action)=>{
      state.activeFilter = action.payload
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item)=>item.completed === false);
      state.items = filtered;
    },
  },
});

export const {addTodo,isCompleted,deleteTodo,activated,clearCompleted} = todoSlice.actions
export default todoSlice.reducer;
