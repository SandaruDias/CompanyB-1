import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Container, Grid, Paper } from '@material-ui/core';
import backgroundImage from './images/att.jpg'; 

const useStyles = makeStyles((theme) => ({
    attendanceContainer: {
        padding: theme.spacing(5),
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
    },
    formContainer: {
        padding: theme.spacing(3),
        maxWidth: '450px', 
        margin: 'auto', 
        backgroundColor: 'rgba(176, 196, 222, 0.9)', 
        borderRadius: theme.spacing(3),
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

const Attendance = () => {
    const classes = useStyles();
    const [id, setID] = useState('');

    const handleIDChange = (e) => {
        setID(e.target.value);
    };

    const handleCheckIn = async () => {
        // Check-in logic
    };

    const handleCheckOut = async () => {
        // Check-out logic
    };

    return (
        <Container className={classes.attendanceContainer}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.formContainer}>
                        <Typography variant="h5" className={classes.title} style={{ textTransform: 'capitalize' }}>Check In</Typography>
                        <TextField
                            id="idInputCheckIn"
                            label="ID"
                            value={id}
                            onChange={handleIDChange}
                            placeholder="Enter ID"
                            fullWidth
                            margin="normal"
                        />
                        <div className={classes.buttonContainer}>
                            <Button variant="contained" color="primary" onClick={handleCheckIn}>Check in</Button>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.formContainer}>
                        <Typography variant="h5" className={classes.title} style={{ textTransform: 'capitalize' }}>Check Out</Typography>
                        <TextField
                            id="idInputCheckOut"
                            label="ID"
                            value={id}
                            onChange={handleIDChange}
                            placeholder="Enter ID"
                            fullWidth
                            margin="normal"
                        />
                        <div className={classes.buttonContainer}>
                            <Button variant="contained" color="secondary" onClick={handleCheckOut}>Check out</Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Attendance;
