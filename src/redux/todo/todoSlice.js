import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items:[{
      id:1,
      title:"Learn React.js"
    },
    {
      id:2,
      title:"Read a Book..."
    }
  ],
  },
  reducers: {},
});

export default todoSlice.reducer;
