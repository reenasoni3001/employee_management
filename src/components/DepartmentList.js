import { departmentSchema } from "../Schema/departmentValidation";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import { addUser, addNewRow } from "../features/departmentSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Button, Input, TableContainer } from "@mui/material";
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
  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: departmentSchema,
    onSubmit: (values, action) => {
      dispatch(addUser({ ...values, id: Date.now() }));
      action.resetForm();
      //setValues([{ ...values, initialValues }]);
    },
  });
  console.log("values", values);
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), firstName: "", lastName: "" },
  ]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("InputFields", inputFields);
  //   };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    dispatch(addNewRow({ ...values, id: Date.now() }));
  };

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
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Department name</StyledTableCell>
              <StyledTableCell align="right">
                Department Details
              </StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departmentData.map((value, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                  {value.departmentName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {value.departmentDetails}
                </StyledTableCell>
                <IconButton
                  disabled={values.length === 1}
                  onClick={handleAddFields}
                  //   onClick={() => handleRemoveFields(inputField.id)}
                >
                  <RemoveIcon />
                </IconButton>
              </StyledTableRow>
            ))}
            <StyledTableRow>
              <StyledTableCells
                align="right"
                name="departmentName"
                label=" Name"
                variant="filled"
                value={values.departmentName}
                onChange={handleChange}
              />
              <StyledTableCells
                align="right"
                name="departmentDetails"
                label="Details"
                variant="filled"
                value={values.departmentDetails}
                onChange={handleChange}
              />
              <IconButton onClick={handleSubmit}>
                <AddIcon />
              </IconButton>
            </StyledTableRow>
            {/* <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >
          Send
        </Button> */}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default DepartmentList;
