import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    firstName: "Anna",
    lastName: "Wheeler",
    age: 1977,
    salary: 786877,
    department: "HR dept",
    id: 1661799612566,
  },
  {
    firstName: "Nancy",
    lastName: "Andrew",
    age: 1886,
    salary: 536000,
    department: "RFG",
    id: 1661799627561,
  },
  {
    firstName: "Harry",
    lastName: "Smith",
    age: 1897,
    salary: 78877,
    department: "DSR",
    id: 1661799612566,
  },
  {
    firstName: "Sam",
    lastName: "Rhode",
    age: 1996,
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
