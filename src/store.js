import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./features/employeeSlice";
import departmentReducer from "./features/departmentSlice";
import searchReducer from "./features/searchSlice";

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    department: departmentReducer,
    searchText: searchReducer,
  },
});
