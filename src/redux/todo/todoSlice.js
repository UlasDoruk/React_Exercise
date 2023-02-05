import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getTodoAsync = createAsyncThunk("todos/getTodoAsync",async()=>{
  const res = await axios("http://localhost:7000/todos")
  return  res.data
})

export const addTodoAsync = createAsyncThunk("todos/addTodoAsync", async (data) => {
  const res = await axios.post("http://localhost:7000/todos", data);
  return res.data;
});

export const toggleTodoAsync = createAsyncThunk("todos/toggleTodoAsync",async({id,data})=>{
  const res = await axios.patch(`http://localhost:7000/todos/${id}`,data);
  return res.data
})

export const deleteTodoAsync = createAsyncThunk("todos/deleteTodoAsync",async(id)=>{
  const res = await axios.delete(`http://localhost:7000/todos/${id}`);
  return res.data
})

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading : false,
    error : null,
    activeFilter :"all",
  },
  reducers: {
    activated : (state,action)=>{
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
    },[addTodoAsync.fulfilled] :(state,action)=>{
      state.items.push(action.payload)
    },[toggleTodoAsync.fulfilled] : (state,action)=>{
      const {id,completed} = action.payload
      const index = state.items.findIndex((item)=> item.id === id )
      state.items[index].completed  = completed
    },[deleteTodoAsync.fulfilled] : (state,action)=>{
      const  id  = action.payload;
      const item = state.items.findIndex((item) => item.id === id);
      state.items.splice(item,1)
    }
  }
});

export const {  activated, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;
