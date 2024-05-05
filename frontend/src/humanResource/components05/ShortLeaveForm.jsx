import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    shortLeaveContainer: {
        backgroundColor: 'lightblue', // Light blue background color
        padding: theme.spacing(5), // Increase padding for larger size
        borderRadius: theme.spacing(3), // Rounded corners
        width: '500px', // Increase width for larger size
        display: 'flex', // Use flexbox
        flexDirection: 'column', // Arrange items vertically
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        textAlign: 'center', // Align text center
    },
    form: {
        width: '100%', // Ensure form takes full width
    },
}));

const ShortLeaveForm = () => {
    const classes = useStyles();
    const [employeeId, setEmployeeId] = useState('');

    const handleIDChange = (e) => {
        setEmployeeId(e.target.value);
    };

    const handleSubmit = () => {
        // Here you can implement the logic to submit the short leave request based on the employee ID entered
        // For now, let's just log the employee ID to the console
        console.log('Submitting short leave request for employee ID:', employeeId);
    };

    return (
        <Container className={classes.shortLeaveContainer}>
            <Typography variant="h5" style={{ textTransform: 'capitalize' }}>Apply for short leave</Typography> {/* Capitalize first letter */}
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    id="employeeIdInput"
                    label="Employee ID"
                    value={employeeId}
                    onChange={handleIDChange}
                    placeholder="Enter Employee ID"
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" type="submit">Apply for Short Leave</Button>
            </form>
        </Container>
    );
};

export default ShortLeaveForm;
