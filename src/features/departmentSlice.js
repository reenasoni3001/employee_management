import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const departmentSlice = createSlice({
  name: "department",
  initialState,

  reducers: {
    addUserDep: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      return state.filter((value) => value.departmentName !== action.payload);
    },
  },
});

export const { addUserDep, deleteUser } = departmentSlice.actions;
export default departmentSlice.reducer;
