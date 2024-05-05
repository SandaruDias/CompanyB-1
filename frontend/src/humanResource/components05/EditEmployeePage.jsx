import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper
} from "@material-ui/core";
import axios from "axios"; // Import Axios for making API calls

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
}));

const EditEmployeePage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    salary: "",
    allowance: "",
    otRate: "",
    workingDays: ""
  });
  const [formError, setFormError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };
  const [employeeId, setEmployeeId] = useState('');

    const handleIDChange = (e) => {
        setEmployeeId(e.target.value);
    };

  const handleUpdateEmployee = async () => {
    if (!employee.salary || !employee.allowance || !employee.otRate || !employee.workingDays) {
      setFormError(true);
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:8090/hr/employee/updateSalaryInfo/${employeeId}`,
        employee
      );

      console.log("Updated employee data:", response.data);
      setFormError(false);
    } catch (error) {
      console.error("Error updating employee data:", error);
    }
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.title} gutterBottom>
        Edit Employee
      </Typography>
      <div className={classes.form}>
        <TextField
          id="employeeIdInput"
          label="Employee ID"
          value={employeeId}
          onChange={handleIDChange}
          
        />
        <TextField
          name="salary"
          label="Salary"
          value={employee.salary}
          onChange={handleInputChange}
          required
        />
        <TextField
          name="allowance"
          label="New Allowance"
          value={employee.allowance}
          onChange={handleInputChange}
          required
        />
        <TextField
          name="otRate"
          label="OT Rate"
          value={employee.otRate}
          onChange={handleInputChange}
          required
        />
        <TextField
          name="workingDays"
          label="Working Days"
          value={employee.workingDays}
          onChange={handleInputChange}
          required
        />
        {formError && (
          <Typography variant="body2" className={classes.errorText}>
            Please fill out all required fields.
          </Typography>
        )}
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdateEmployee}
          >
            Update Employee Salary Details
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default EditEmployeePage;
