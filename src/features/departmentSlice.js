import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import employeeReducer from "./employeeSlice";
//import { addUser } from "./employeeSlice";

// export const addWithThunk = createAsyncThunk(
//   "names/addWithThunk",
//   async (employees, { getState }) => {
//     console.log("action", getState().action.payload);
//     return employees + getState().employees;
//   }
// );

const initialState = [];

const departmentSlice = createSlice({
  name: "department",
  initialState,

  reducers: {
    addUserDep: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      return state.filter((value) => value.id !== action.payload);
    },
  },
});

export const { addUserDep, deleteUser } = departmentSlice.actions;
export default departmentSlice.reducer;
