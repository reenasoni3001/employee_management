import { departmentSchema } from "../Schema/departmentValidation";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import { addUserDep, deleteUser } from "../features/departmentSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Button, Input, TableContainer, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
//import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@material-ui/core/Paper";

import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
//import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { v4 as uuidv4 } from "uuid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableCells = styled(Input)(({ theme }) => ({
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

const initialValues = {
  departmentName: "",
  departmentDetails: "",
};

function DepartmentList() {
  const dispatch = useDispatch();
  const departmentData = useSelector((state) => state.department);
  console.log("department ka data", departmentData);
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: departmentSchema,
    onSubmit: (values, action) => {
      dispatch(addUserDep({ ...values, id: Date.now() }));
      action.resetForm();
      setCount(count + 1);
      //setValues([{ ...values, initialValues }]);
    },
  });
  const [count, setCount] = React.useState(1);
  console.log(errors.departmentName);
  // console.log("values", values);
  // const classes = useStyles();
  // const [inputFields, setInputFields] = useState([
  //   { id: uuidv4(), firstName: "", lastName: "" },
  // ]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("InputFields", inputFields);
  //   };

  // const handleChangeInput = (id, event) => {
  //   const newInputFields = inputFields.map((i) => {
  //     if (id === i.id) {
  //       i[event.target.name] = event.target.value;
  //     }
  //     return i;
  //   });

  //   setInputFields(newInputFields);
  // };

  // const handleAddFields = () => {
  //   dispatch(addNewRow({ ...values, id: Date.now() }));
  // };

  //   const handleRemoveFields = (id) => {
  //     const values = [...inputFields];
  //     values.splice(
  //       values.findIndex((value) => value.id === id),
  //       1
  //     );
  //     setInputFields(values);
  //   };

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
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{value.departmentName}</TableCell>
                <TableCell>{value.departmentDetails}</TableCell>
                <IconButton onClick={() => dispatch(deleteUser(value.id))}>
                  <RemoveIcon />
                </IconButton>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>{count}</TableCell>
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
                  error={errors.departmentDetails}
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
