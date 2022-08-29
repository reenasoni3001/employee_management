// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Input from "@material-ui/core/Input";
// import Paper from "@material-ui/core/Paper";
// import IconButton from "@material-ui/core/IconButton";
// // Icons
// import EditIcon from "@material-ui/icons/EditOutlined";
// import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
// import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
// //other
// import { departmentSchema } from "../Schema/departmentValidation";
// import { useFormik } from "formik";
// import { addUser } from "../features/departmentSlice";
// import { useDispatch, useSelector } from "react-redux/es/exports";
// import { Button } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing(3),
//     overflowX: "auto",
//   },
//   table: {
//     minWidth: 650,
//   },
//   selectTableCell: {
//     width: 60,
//   },
//   tableCell: {
//     width: 130,
//     height: 40,
//   },
//   input: {
//     width: 130,
//     height: 40,
//   },
// }));

// // const createData = (name, calories, fat, carbs, protein) => ({
// //   id: name.replace(" ", "_"),
// //   name,
// //   calories,
// //   fat,
// //   carbs,
// //   protein,
// //   isEditMode: false,
// // });

// const CustomTableCell = ({ row, name, onChange }) => {
//   const classes = useStyles();
//   const { isEditMode } = row;
//   return (
//     <TableCell align="left" className={classes.tableCell}>
//       {isEditMode ? (
//         <Input
//           value={row[name]}
//           name={name}
//           onChange={(e) => onChange(e, row)}
//           className={classes.input}
//         />
//       ) : (
//         row[name]
//       )}
//     </TableCell>
//   );
// };

// const initialValues = {
//   departmentName: "",
//   departmentDetails: "",
// };
// function Department() {
//   const dispatch = useDispatch();
//   const departmentData = useSelector((state) => state.department);
//   console.log("department ka data", departmentData);
//   const {
//     values,
//     errors,
//     handleBlur,
//     touched,
//     handleChange,
//     handleSubmit,
//     setValues,
//   } = useFormik({
//     initialValues: initialValues,
//     validationSchema: departmentSchema,
//     onSubmit: (values, action) => {
//       dispatch(addUser({ ...values, id: Date.now() }));
//     },
//   });

//   const [rows, setRows] = React.useState([
//     createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//     createData("Eclair", 262, 16.0, 24, 6.0),
//   ]);
// const [previous, setPrevious] = React.useState({});
// const classes = useStyles();

// const onToggleEditMode = (id) => {
//   setValues((state) => {
//     return values.map((row) => {
//       if (row.id === id) {
//         return { ...row, isEditMode: !row.isEditMode };
//       }
//       return row;
//     });
//   });
// };

// const onChange = (e, row) => {
//   if (!previous[row.id]) {
//     setPrevious((state) => ({ ...state, [row.id]: row }));
//   }
//   const value = e.target.value;
//   const name = e.target.name;
//   const { id } = row;
//   const newRows = rows.map((row) => {
//     if (row.id === id) {
//       return { ...row, [name]: value };
//     }
//     return row;
//   });
//   setRows(newRows);
// };

// const onRevert = (id) => {
//   const newRows = values.map((row) => {
//     if (row.id === id) {
//       return previous[id] ? previous[id] : row;
//     }
//     return row;
//   });
//   setValues(newRows);
//   setPrevious((state) => {
//     delete state[id];
//     return state;
//   });
//   onToggleEditMode(id);
// };

// return (
//   <Paper className={classes.root}>
//     <Table className={classes.table} aria-label="caption table">
//       <TableHead>
//         <TableRow>
//           <TableCell align="left" />
//           <TableCell align="left">Department Name</TableCell>
//           <TableCell align="left">Department Details</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {departmentData.map((row) => (
//           <TableRow key={row.id}>
//             <TableCell className={classes.selectTableCell}>
//               <CustomTableCell
//                   {...{ values, name: "departmentName", handleChange }}
//                 />
//                 <CustomTableCell
//                   {...{ values, name: "departmentDetails", handleChange }}
//                 />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }

// export default Department;

//   <TableRow key={row.id}>
//     <TableCell className={classes.selectTableCell}>
//       {row.isEditMode ? (
//         <>
//           <IconButton
//             aria-label="done"
//             onClick={() => onToggleEditMode(row.id)}
//           >
//             <DoneIcon />
//           </IconButton>
//           <IconButton
//             aria-label="revert"
//             onClick={() => onRevert(row.id)}
//           >
//             <RevertIcon />
//           </IconButton>
//         </>
//       ) : (
//         <IconButton
//           aria-label="delete"
//           onClick={() => onToggleEditMode(row.id)}
//         >
//           <EditIcon />
//         </IconButton>
//       )}
//     </TableCell>
//     <CustomTableCell
//       {...{ values, name: "departmentName", onChange }}
//     />
//     <CustomTableCell
//       {...{ values, name: "departmentDetails", onChange }}
//     />
//   </TableRow>
// ))}
