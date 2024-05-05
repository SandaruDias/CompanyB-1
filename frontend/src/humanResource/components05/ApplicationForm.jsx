import React, { useState } from "react";
import axios from "axios";
import {
  Typography,
  TextField,
  Button,
  Grid,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
    nicNo: "",
    birthDay: "",
    mobileNo: "",
    address: "",
    gender: "",
    email: "",
    isMarried: "",
    position: "",
    division: "",
    education: "",
    about: "",
  });
  const [formError, setFormError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if all fields are filled
    const isFormValid = Object.values(formData).every((value) => value.trim() !== "");
    if (!isFormValid) {
      setFormError(true);
      return;
    }

    const apiUrl = "http://localhost:8090/hr/applicant/add";

    try {
      const response = await axios.post(apiUrl, formData);
      console.log("Form submitted successfully:", response.data);
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        nicNo: "",
        birthDay: "",
        mobileNo: "",
        address: "",
        gender: "",
        email: "",
        isMarried: "",
        position: "",
        division: "",
        education: "",
        about: "",
      });
      setFormError(false);
    } catch (error) {
      console.error("Failed to submit form:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#ADD8E6", padding: "10px" }}>
        <Typography variant="h5" align="center" style={{ fontWeight: "bold" }}>
          Application Form
        </Typography>
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {formError && (
            <Grid item xs={12}>
              <Typography variant="body2" color="error">
                Please fill out all fields.
              </Typography>
            </Grid>
          )}
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
              name="nicNo"
              label="National ID (NIC)"
              fullWidth
              value={formData.nicNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="birthDay"
              label="Birth Date"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.birthDay}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="mobileNo"
              label="Mobile Number"
              fullWidth
              value={formData.mobileNo}
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
                name="isMarried"
                value={formData.isMarried}
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
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "1rem" }}
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ApplicationForm;
