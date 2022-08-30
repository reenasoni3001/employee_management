import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    firstName: "Reena",
    lastName: "Soni",
    age: 1667,
    salary: 78687,
    department: "HR dept",
    id: 1661799612566,
  },
  {
    firstName: "Tara",
    lastName: "Soni",
    age: 1556,
    salary: 536000,
    department: "CSRP",
    id: 1661799627561,
  },
];

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
