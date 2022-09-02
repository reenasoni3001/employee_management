import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@mui/material";
import { deleteUser } from "../features/employeeSlice";
import { useDispatch } from "react-redux/es/exports";
import EditEmployee from "../components/EditEmployee";

const List = ({ employees }) => {
  const dispatch = useDispatch();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "lightBlue" }}>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Salary</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {employee.firstName}
              </TableCell>
              <TableCell align="right">{employee.lastName}</TableCell>
              <TableCell align="right">{employee.age}</TableCell>
              <TableCell align="right">{`$ ${employee.salary}`}</TableCell>
              <TableCell align="right">{employee.department}</TableCell>
              <TableCell align="right">
                <EditEmployee employee={employee} />
                <Button onClick={() => dispatch(deleteUser(employee.id))}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
