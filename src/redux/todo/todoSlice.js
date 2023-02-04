import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getTodoAsync = createAsyncThunk("todos/getTodoAsync",async()=>{
  const res = await fetch("http://localhost:7000/todos")
  return await res.json()
})

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading : false,
    error : null,
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
  },extraReducers:{
    [getTodoAsync.pending] : (state,action)=>{
      state.isLoading = true
    },[getTodoAsync.fulfilled] : (state,action)=>{
      state.items = action.payload
      state.isLoading = false
    },[getTodoAsync.rejected] : (state,action)=>{
      state.isLoading = false
      state.error = action.error.message
    }
  }
});

export const {addTodo,isCompleted,deleteTodo,activated,clearCompleted} = todoSlice.actions
export default todoSlice.reducer;
