import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Container } from '@material-ui/core';
import backgroundImage from './images/shr.jpg'; // Import your background image

const useStyles = makeStyles((theme) => ({
    shortLeaveContainer: {
        padding: theme.spacing(5),
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the background covers the entire viewport height
    },
    formContainer: {
        padding: theme.spacing(3),
        margin: 'auto',
        backgroundColor: 'rgba(176, 196, 222, 0.9)', // Add a semi-transparent white background to the form container
        borderRadius: theme.spacing(3), // Rounded corners
        width: '80%', // Adjust the width of the form container
        maxWidth: '600px', // Set a maximum width for the form container
    },
    title: {
        marginBottom: theme.spacing(2),
        textAlign: 'center',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
    },
}));

const ShortLeaveForm = () => {
    const classes = useStyles();
    const [employeeId, setEmployeeId] = useState('');

    const handleIDChange = (e) => {
        setEmployeeId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log('Submitting short leave request for employee ID:', employeeId);
        // Additional logic for submitting the short leave request can be added here
    };

    return (
        <Container className={classes.shortLeaveContainer}>
            <div className={classes.formContainer}>
                <Typography variant="h5" style={{ textTransform: 'capitalize', marginBottom: '20px' }}>Apply for short leave</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="employeeIdInput"
                        label="Employee ID"
                        value={employeeId}
                        onChange={handleIDChange}
                        placeholder="Enter Employee ID"
                        fullWidth
                        margin="normal"
                    />
                    <div className={classes.buttonContainer}>
                        <Button variant="contained" color="primary" type="submit">Apply for Short Leave</Button>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default ShortLeaveForm;
