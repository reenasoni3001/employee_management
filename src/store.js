import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./features/employeeSlice";
import departmentReducer from "./features/departmentSlice";

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    department: departmentReducer,
  },
});
