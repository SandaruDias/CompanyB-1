import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper
} from "@material-ui/core";

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
    textAlign: "center", // Center align the title
    fontWeight: "bold", // Make the title bold
  },
}));

const EditEmployeePage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    jobPosition: "",
    contactNumber: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Updated employee data:", employee);
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.title} gutterBottom>
        Edit Employee
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          value={employee.name}
          onChange={handleInputChange}
          required
        />
        <TextField
          name="email"
          label="Email"
          value={employee.email}
          onChange={handleInputChange}
          required
        />
        <TextField
          name="jobPosition"
          label="Job Position"
          value={employee.jobPosition}
          onChange={handleInputChange}
          required
        />
        <TextField
          name="contactNumber"
          label="Contact Number"
          value={employee.contactNumber}
          onChange={handleInputChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Update Employee
        </Button>
      </form>
    </Paper>
  );
};

export default EditEmployeePage;
