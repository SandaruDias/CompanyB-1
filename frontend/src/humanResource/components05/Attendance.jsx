import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Container, Grid, Paper, Snackbar } from '@material-ui/core';
import backgroundImage from './images/att.jpg';
import axios from 'axios';

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
    snackbarText: {
        fontSize: '1.5rem', 
        fontWeight: 'bold', 
        color:'red',
    },
}));

const Attendance = () => {
    const classes = useStyles();
    const [idCheckIn, setIDCheckIn] = useState('');
    const [idCheckOut, setIDCheckOut] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleCheckIn = async () => {
        try {
            const response = await axios.post(`http://localhost:8090/hr/employee/attendance/check-in/${idCheckIn}`);
            setSuccessMessage(`Check-in successful: ${response.data}`);
            setErrorMessage('');
            setOpenSnackbar(true);
        } catch (error) {
            setErrorMessage('Invalid ID for Check-in. Please try again.');
            setSuccessMessage('');
            setOpenSnackbar(true);
        }
    };

    const handleCheckOut = async () => {
        
        try {
            const response = await axios.post(`http://localhost:8090/hr/employee/attendance/check-out/${idCheckOut}`);
            setSuccessMessage(`Check-out successful: ${response.data.message}`);
            setErrorMessage('');
            setOpenSnackbar(true);
        } catch (error) {
            setErrorMessage('Invalid ID for Check-out. Please try again.');
            setSuccessMessage('');
            setOpenSnackbar(true);
        }
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <Container className={classes.attendanceContainer}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.formContainer}>
                        <Typography variant="h5" className={classes.title} style={{ textTransform: 'capitalize' }}>Check In</Typography>
                        <TextField
                            id="idInputCheckIn"
                            label="ID for Check In"
                            value={idCheckIn}
                            onChange={(e) => setIDCheckIn(e.target.value)}
                            placeholder="Enter ID for Check In"
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
                            label="ID for Check Out"
                            value={idCheckOut}
                            onChange={(e) => setIDCheckOut(e.target.value)}
                            placeholder="Enter ID for Check Out"
                            fullWidth
                            margin="normal"
                        />
                        <div className={classes.buttonContainer}>
                            <Button variant="contained" color="secondary" onClick={handleCheckOut}>Check out</Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Typography variant="body1" align="center" className={classes.snackbarText}>
                    {errorMessage || successMessage}
                </Typography>
                
            </Snackbar>
        </Container>
    );
};

export default Attendance;
