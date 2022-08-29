import * as Yup from "yup";
import moment from "moment";
//const moment = require("moment");

export const addUserSchema = Yup.object({
  firstName: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter your first name"),
  lastName: Yup.string().min(3).max(25).required("Please enter your last name"),
  age: Yup.string().test("DOB", "Please enter valid DOB", (value) => {
    return moment().diff(moment(value), "years") >= 18;
  }),
  salary: Yup.number().required("Please enter valid Salary"),
  department: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter your Department name"),
});
