import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Container } from '@material-ui/core';
import axios from 'axios';
import backgroundImage from './images/shr.jpg';

const useStyles = makeStyles((theme) => ({
    shortLeaveContainer: {
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
        margin: 'auto',
        backgroundColor: 'rgba(176, 196, 222, 0.9)',
        borderRadius: theme.spacing(3),
        width: '80%',
        maxWidth: '600px',
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
    const [responseMessage, setResponseMessage] = useState('');

    const handleIDChange = (e) => {
        setEmployeeId(e.target.value);
    };

    const handleApplyForShortLeave = async () => {
        try {
            const response = await axios.get(`http://localhost:8090/hr/administrator/attendancePermission/${employeeId}`);
            console.log('Response from server:', response.data);

            if (response.status === 200) {
                setResponseMessage(response.data|| 'Request processed successfully');
            } else {
                setResponseMessage('Failed to fetch attendance permission');
            }
        } catch (error) {
            console.error('Error fetching attendance permission:', error);
            setResponseMessage('Failed to fetch attendance permission');
        }
    };

    return (
        <Container className={classes.shortLeaveContainer}>
            <div className={classes.formContainer}>
                <Typography variant="h5" style={{ textTransform: 'capitalize', marginBottom: '20px' }}>Check Attendance Permission</Typography>
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
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleApplyForShortLeave}
                    >
                        Get Attendance Permission
                    </Button>
                </div>
                {responseMessage && (
                    <Typography variant="body1" style={{ marginTop: '20px' }}>
                        Response: {responseMessage}
                    </Typography>
                )}
            </div>
        </Container>
    );
};

export default ShortLeaveForm;
