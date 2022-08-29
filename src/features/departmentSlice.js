import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const departmentSlice = createSlice({
  name: "department",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      return state.filter((value) => value.id !== action.payload);
    },

    addNewRow: (state, action) => {
      console.log("redux", action.payload);
      state.push(action.payload);
    },
  },
});

export const { addUser, deleteUser, addNewRow } = departmentSlice.actions;
export default departmentSlice.reducer;
