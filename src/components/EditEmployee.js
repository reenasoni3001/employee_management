import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { useFormik } from "formik";
import { employeeSchema } from "../Schema/formValidation";
import { useDispatch } from "react-redux/es/exports";
import { editUser } from "../features/employeeSlice";

export default function EditEmployee({ employee }) {
  const dispatch = useDispatch();

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: employee.firstName,
        lastName: employee.lastName,
        age: employee.age,
        salary: employee.salary,
        department: employee.department,
      },
      validationSchema: employeeSchema,
      onSubmit: (values, action) => {
        dispatch(editUser({ ...values, id: employee.id }));
        action.resetForm();
        setOpen(false);
      },
    });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Employee details</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="nameFirst"
            label="Employee Firstname"
            type="text"
            fullWidth
            name="firstName"
            variant="standard"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && touched.firstName ? (
            <span style={{ color: "red" }}>{errors.firstName}</span>
          ) : null}
          <TextField
            margin="dense"
            id="nameLast"
            label="Employee Lastname"
            type="text"
            fullWidth
            name="lastName"
            variant="standard"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && touched.lastName ? (
            <span style={{ color: "red" }}>{errors.lastName}</span>
          ) : null}
          <TextField
            margin="dense"
            id="age"
            label="Employee DOB"
            type="number"
            fullWidth
            name="age"
            variant="standard"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.age && touched.age ? (
            <span style={{ color: "red" }}>{errors.age}</span>
          ) : null}
          <TextField
            margin="dense"
            id="empSal"
            label="Employee Salary"
            type="number"
            fullWidth
            name="salary"
            variant="standard"
            value={values.salary}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.salary && touched.salary ? (
            <span style={{ color: "red" }}>{errors.salary}</span>
          ) : null}
          <TextField
            margin="dense"
            id="EmpDep"
            label="Employee Department"
            type="text"
            fullWidth
            name="department"
            variant="standard"
            value={values.department}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.department && touched.department ? (
            <span style={{ color: "red" }}>{errors.department}</span>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
