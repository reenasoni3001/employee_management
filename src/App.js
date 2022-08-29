import "./App.css";
import EmployeeDetails from "./components/EmployeeDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Department from "./components/Department";
import DepartmentList from "./components/DepartmentList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/department" element={<DepartmentList />}></Route>
        <Route path="/" element={<EmployeeDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
