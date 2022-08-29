import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@mui/material";
import { deleteUser } from "../features/employeeSlice";
import { useDispatch } from "react-redux/es/exports";
import EditEmployee from "../components/EditEmployee";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const List = ({ employees, setOpen }) => {
  const dispatch = useDispatch();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">DOB</StyledTableCell>
            <StyledTableCell align="right">Salary</StyledTableCell>
            <StyledTableCell align="right">Department</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {employee.firstName}
              </StyledTableCell>
              <StyledTableCell align="right">
                {employee.lastName}
              </StyledTableCell>
              <StyledTableCell align="right">{employee.age}</StyledTableCell>
              <StyledTableCell align="right">{`$ ${employee.salary}`}</StyledTableCell>
              <StyledTableCell align="right">
                {employee.department}
              </StyledTableCell>
              <StyledTableCell align="right">
                <EditEmployee employee={employee} />
                <Button onClick={() => dispatch(deleteUser(employee.id))}>
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
