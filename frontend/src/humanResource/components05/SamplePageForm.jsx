import React, { useState } from "react";
import axios from "axios";
import {
  Typography,
  TextField,
  Button,
  Grid,
  makeStyles,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(0),
    backgroundColor: "#e1f5fe", 
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1)
  },
  title: {
    textAlign: "center", 
    fontWeight: "bold" 
  },
  sexChoices: {
    display: "flex",
    flexDirection: "row"
  }
}));

const SamplePageForm = ({ onSubmit }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    idNumber: "",
    recruitedDate: "",
    salary: "",
    allowance: "",
    otRate: "",
    workingDays: "",
    firstName: "",
    lastName: "",
    nationalID: "",
    birthDate: "",
    mobileNumber: "",
    address: "",
    gender: "",
    email: "",
    marriedStatus: "",
    position: "",
    division: "",
    courseLevel: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = 'http://localhost:8090/hr/employ/create'; // Replace with your actual API URL

    try {
      const response = await axios.post(apiUrl, formData, {
      
        'Content-Type': 'application/json', // Example header
           
      });
      console.log('Form submitted successfully:', response.data);
      alert('Form submitted successfully!');
      onSubmit(response.data); // Optional: Pass response data to a parent component
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors more informatively based on the error type:
      let errorMessage = 'An error occurred. Please try again later.';
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errorMessage = `Server Error: ${error.response.data.message || error.response.statusText}`; // Access specific error message from response, if available
      } else if (error.request) {
        // The request was made but no response was received
        // (e.g., network error)
        errorMessage = 'Request Error: Could not connect to the server.';
      } else {
        // Something happened in setting up the request that triggered an error
        errorMessage = 'Error: An unexpected error occurred.';
      }
      alert(errorMessage);
    }
  };
  
  

  const resetForm = () => {
    setFormData({
      idNumber: "",
      recruitedDate: "",
      salary: "",
      allowance: "",
      otRate: "",
      workingDays: "",
      firstName: "",
      lastName: "",
      nationalID: "",
      birthDate: "",
      mobileNumber: "",
      address: "",
      gender: "",
      email: "",
      marriedStatus: "",
      position: "",
      division: "",
      courseLevel: ""
    });
  };

  return (
    <>
      <div style={{ backgroundColor: "#ADD8E6", padding: "10px" }}>
      <Typography variant="h5" align="center" style={{ fontWeight: "bold" }}>Employee Form</Typography>
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="idNumber"
              label="ID Number"
              fullWidth
              value={formData.idNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="recruitedDate"
              label="Recruited Date"
              fullWidth
              type="date"
              InputLabelProps={{
                shrink: true
              }}
              value={formData.recruitedDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="salary"
              label="Salary"
              fullWidth
              value={formData.salary}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="allowance"
              label="Allowance"
              fullWidth
              value={formData.allowance}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="otRate"
              label="OT Rate"
              fullWidth
              value={formData.otRate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="workingDays"
              label="Working Days"
              fullWidth
              value={formData.workingDays}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="firstName"
              label="First Name"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="lastName"
              label="Last Name"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="nationalID"
              label="National ID (NIC)"
              fullWidth
              value={formData.nationalID}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="birthDate"
              label="Birth Date"
              fullWidth
              type="date"
              InputLabelProps={{
                shrink: true
              }}
              value={formData.birthDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="mobileNumber"
              label="Mobile Number"
              fullWidth
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="address"
              label="Address"
              fullWidth
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="email"
              label="Email"
              fullWidth
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="married-status-label">Married Status</InputLabel>
              <Select
                labelId="married-status-label"
                id="marriedStatus"
                name="marriedStatus"
                value={formData.marriedStatus}
                onChange={handleChange}
              >
                <MenuItem value="married">Married</MenuItem>
                <MenuItem value="not-married">Not Married</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="position"
              label="Position"
              fullWidth
              value={formData.position}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="division"
              label="Division"
              fullWidth
              value={formData.division}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="courseLevel"
              label="Course Level"
              fullWidth
              value={formData.courseLevel}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "1rem" }}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default SamplePageForm;
