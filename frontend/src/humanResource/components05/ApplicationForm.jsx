import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Grid,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2),
    backgroundColor: "#e1f5fe",
    borderRadius: theme.spacing(1),
  },
}));

const ApplicationForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationalID: "",
    alternateNIC: "",
    birthDate: "",
    mobileNumber: "",
    address: "",
    gender: "",
    email: "",
    maritalStatus: "",
    position: "",
    division: "",
    education: "",
    about: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to backend API)
    console.log(formData);
  };

  return (
    <>
      <div style={{ backgroundColor: "#ADD8E6", padding: "10px" }}>
      <Typography variant="h5" align="center" style={{ fontWeight: "bold" }}>Application Form</Typography>
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
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
              name="alternateNIC"
              label="Alternate NIC"
              fullWidth
              value={formData.alternateNIC}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="birthDate"
              label="Birth Date"
              type="date"
              fullWidth
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
          <Grid item xs={12}>
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
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="marital-status-label">Marital Status</InputLabel>
              <Select
                labelId="marital-status-label"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
              >
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="married">Married</MenuItem>
                <MenuItem value="divorced">Divorced</MenuItem>
                <MenuItem value="widowed">Widowed</MenuItem>
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
              name="education"
              label="Education"
              fullWidth
              value={formData.education}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="about"
              label="About"
              fullWidth
              multiline
              rows={4}
              value={formData.about}
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

export default ApplicationForm;
