import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    attendanceContainer: {
        backgroundColor: 'lightblue',
        padding: theme.spacing(5),
        borderRadius: theme.spacing(3),
        width: '400px', // Reduced width
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        marginBottom: theme.spacing(2), // Add margin to separate from form
    },
}));

const Attendance = () => {
    const classes = useStyles();
    const [id, setID] = useState('');

    const handleIDChange = (e) => {
        setID(e.target.value);
    };

    const handleCheckIn = async () => {
        setLoading(true);
        setError(null);
        setSuccess(false);
    
        try {
          const response = await fetch(
            `http://localhost:8090/hr/employee/attendance/check-in/${id}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ employeeId: id }), // Example of sending data with ID
            }
          );
    
          if (response.ok) {
            setSuccess(true); // Indicate successful check-in
            console.log(`Check-in successful for ID: ${id}`);
          } else {
            const errorData = await response.json();
            throw new Error(errorData.message || 'An error occurred');
          }
        } catch (err) {
          setError(err.message);
          console.error('Error during check-in:', err);
        } finally {
          setLoading(false);
        }
      };

    return (
        <Container className={classes.attendanceContainer}>
            <Typography variant="h5" className={classes.title} style={{ textTransform: 'capitalize', textAlign: 'center' }}>Enter your attendance</Typography>
            <form className={classes.form}>
                <TextField
                    id="idInput"
                    label="ID"
                    value={id}
                    onChange={handleIDChange}
                    placeholder="Enter ID"
                    fullWidth
                    margin="normal"
                    style={{ width: '100%' }} // Adjust width of input field
                />
                <Button variant="contained" color="primary" onClick={handleCheckIn}>Check in</Button>
            </form>
        </Container>
    );
};

export default Attendance;
