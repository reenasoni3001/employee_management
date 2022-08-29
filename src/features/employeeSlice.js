import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const employeeSlice = createSlice({
  name: "employees",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      return state.filter((value) => value.id !== action.payload);
    },

    editUser: (state, action) => {
      return state.map((ep) =>
        ep.id === action.payload.id ? action.payload : ep
      );
    },
  },
});

export const { addUser, deleteUser, editUser } = employeeSlice.actions;
export default employeeSlice.reducer;
