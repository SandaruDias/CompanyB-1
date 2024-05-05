import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    attendanceContainer: {
        backgroundColor: 'lightblue', // Light blue background color
        padding: theme.spacing(5), // Increase padding for larger size
        borderRadius: theme.spacing(3), // Rounded corners
        width: '500px', // Increase width for larger size
        display: 'flex', // Use flexbox
        flexDirection: 'column', // Arrange items vertically
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
    },
}));

const Attendance = () => {
    const classes = useStyles();
    const [nic, setNIC] = useState('');

    const handleNICChange = (e) => {
        setNIC(e.target.value);
    };

    const handleCheckIn = () => {
        // Here you can implement the logic to mark the attendance based on the NIC entered
        // For now, let's just log the NIC to the console
        console.log('Checking in with NIC:', nic);
    };

    return (
        <Container className={classes.attendanceContainer}>
            <Typography variant="h5" style={{ textTransform: 'capitalize' }}>Enter your attendance</Typography> {/* Capitalize first letter */}
            <form>
                <TextField
                    id="nicInput"
                    label="NIC"
                    value={nic}
                    onChange={handleNICChange}
                    placeholder="Enter NIC"
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handleCheckIn}>Check in</Button>
            </form>
        </Container>
    );
};

export default Attendance;
