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

    const handleCheckIn = () => {
        console.log('Checking in with ID:', id);
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
