import { departmentSchema } from "../Schema/departmentValidation";
import { useFormik } from "formik";
import { addUserDep, deleteUser } from "../features/departmentSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Input, TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const initialValues = {
  departmentName: "",
  departmentDetails: "",
};

function DepartmentList() {
  const dispatch = useDispatch();
  const departmentData = useSelector((state) => state.department);
  const employees = useSelector((state) => state.employees);

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: departmentSchema,
    onSubmit: (values, action) => {
      dispatch(addUserDep({ ...values, id: Date.now() }));
      action.resetForm();
    },
  });

  const deleteDepartment = (departmentName) => {
    if (employees.some((employee) => employee.department === departmentName)) {
      console.log("cannot delete ");
    } else {
      dispatch(deleteUser(departmentName));
    }
  };

  return (
    <Container>
      <h1>Department List</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Department name</TableCell>
              <TableCell>Department Details</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departmentData.map((value, i) => (
              <TableRow key={value.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{value.departmentName}</TableCell>
                <TableCell>{value.departmentDetails}</TableCell>
                <IconButton
                  onClick={() => deleteDepartment(value.departmentName)}
                >
                  <RemoveIcon />
                </IconButton>
              </TableRow>
            ))}
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Input
                  name="departmentName"
                  label=" Name"
                  variant="filled"
                  value={values.departmentName}
                  onChange={handleChange}
                />
                {errors.departmentName && touched.departmentName ? (
                  <p style={{ color: "red" }}>{errors.departmentName}</p>
                ) : null}
              </TableCell>

              <TableCell>
                <Input
                  name="departmentDetails"
                  label="Details"
                  variant="filled"
                  value={values.departmentDetails}
                  onChange={handleChange}
                />
                {errors.departmentDetails && touched.departmentDetails ? (
                  <p style={{ color: "red" }}>{errors.departmentDetails}</p>
                ) : null}
              </TableCell>

              <IconButton onClick={handleSubmit}>
                <AddIcon />
              </IconButton>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default DepartmentList;
