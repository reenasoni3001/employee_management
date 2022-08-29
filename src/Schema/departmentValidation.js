import * as Yup from "yup";
//import moment from "moment";
//const moment = require("moment");

export const departmentSchema = Yup.object({
  departmentName: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter your department name"),
  departmentDetails: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter your department details"),
});
