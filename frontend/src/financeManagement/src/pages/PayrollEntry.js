import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { TextField, Button, Container, Typography, Grid, Paper, Snackbar, Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#124E66', // Used for buttons and important elements
      },
      secondary: {
        main: '#748D92', // Used for backgrounds and less prominent elements
      },
      error: {
        main: '#E53935', // Error color for buttons or alerts
      },
      background: {
        default: '#E2E2E2', // Light gray for the general background, enhances text visibility
        paper: '#FFFFFF', // White for Paper components to contrast against the primary colors
      },
      text: {
        primary: '#212A31', // Dark blue, good contrast against the lighter backgrounds
        secondary: '#2E3944', // Secondary text color, slightly lighter
      }
    },
  });

function PayrollEntry() {
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        employeeId: '',
        employeeName: '',
        basicSalary: '',
        otHours: '',
        workingDays: '',
        taxPercentage: '',
        deductions: '',
        allowance: '',
        payrollDate: new Date().toISOString().slice(0, 10), // format to YYYY-MM-DD
        payrollStartDate: new Date().toISOString().slice(0, 10), // format to YYYY-MM-DD
        payrollEndDate: new Date().toISOString().slice(0, 10), // format to YYYY-MM-DD
        netPay: ''
    });
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState('');

    useEffect(() => {
        if (location.state && location.state.payroll) {
            const { payroll } = location.state;
            setFormData({ ...formData, ...payroll, payrollId : payroll.payrollId });
        }
    }, [location]);


    useEffect(() => {
        if (location.state && location.state.notification) {
            const { notification } = location.state;
            setFormData({ ...formData, employeeId : notification.employeeId, notificationId : notification.notificationId});
        }
    }, [location.state]);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submit behavior

        if (!formData.employeeId) {
            alert('Employee ID is required');
            return;
        }

        const url = formData.id ? `http://localhost:8090/api/payroll/${formData.id}` : 'http://localhost:8090/api/payroll';
        const method = formData.id ? 'put' : 'post';

        try {
            await axios({
                method: method,
                url: url,
                data: formData
            });
            console.log('Payroll saved or updated');
            setFormData({
                employeeId: '',
                employeeName: '',
                basicSalary: '',
                otHours: '',
                workingDays: '',
                taxPercentage: '',
                deductions: '',
                allowance: '',
                payrollDate: new Date().toISOString().slice(0, 10), // format to YYYY-MM-DD
                payrollStartDate: new Date().toISOString().slice(0, 10), // format to YYYY-MM-DD
                payrollEndDate: new Date().toISOString().slice(0, 10), // format to YYYY-MM-DD
                netPay: ''
            }); // Reset the form data
            navigate('/payroll-details'); // Navigate back to the details view
        } catch (error) {
            console.error('Failed to save or update payroll:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFetchEmployee = async () => {
        if (!formData.employeeId) {
            setAlert('Please enter an Employee ID');
            setOpen(true);
            return;
        }
        try {
            const response = await axios.get(`http://localhost:8090/hr/employ/getEmploy/${formData.employeeId}`);
            if (response.data) {
                const { firstName, lastName, nicNo,birthDay,mobileNo,gender,email,isMarried, position,division,
                userId, recruitedDate,salary,allowance,otRate, workingDays,courseLevel,address} = response.data;
                setFormData({
                    ...formData,
                    employeeId :userId,
                    employeeName: firstName + lastName,
                    basicSalary : salary,
                    otHours: otRate,
                    workingDays: workingDays,
                    allowance : allowance,
                });
            } else {
                setAlert('Employee ID not found');
                setOpen(true);
            }
        } catch (error) {
            setAlert('Error fetching employee data');
            setOpen(true);
            console.error('Error fetching employee:', error);
        }
    };

    const sendConfirmationToHR = async (payrollData) => {
        await axios.post('http://localhost:8090/api/hr-system/confirm', payrollData, {
        });
    };

    const calculateNetPay = () => {
        try {
            const grossPay = parseFloat(formData.basicSalary || 0) + (parseFloat(formData.otHours || 0) * parseFloat(formData.salaryPerHour || 0));
            const taxAmount = (grossPay * parseFloat(formData.taxPercentage || 0)) / 100;
            const netPay = grossPay - taxAmount - parseFloat(formData.deductions || 0) + parseFloat(formData.benefits || 0);
            setFormData({ ...formData, netPay });
        } catch (error) {
            console.error("Error in calculating net pay:", error);
            alert('Failed to calculate net pay. Check input values.');
        }
    };


    const handleSave = async () => {
        if (!formData.employeeId || !formData.employeeName || !formData.netPay) {
            setAlert('Please fill out all fields before saving');
            setOpen(true);
            return;
        }
        try {
            const response = await axios.post('http://localhost:8090/api/payroll', formData);
            setAlert('Payroll saved successfully!');
            setOpen(true);
            console.log('Payroll saved:', response.data);
        } catch (error) {
            setAlert('Failed to save payroll');
            setOpen(true);
            console.error('Error saving payroll:', error);
        }
    };

    const handleUpdate = async () => {
        if (!formData.employeeId || !formData.employeeName || !formData.netPay) {
            setAlert('Please fill out all fields before saving');
            setOpen(true);
            return;
        }
        try {
            const response = await axios.put(`http://localhost:8090/api/payroll/${formData.payrollId}`, formData);
            setAlert('Payroll updated successfully!');
            setOpen(true);
            console.log('Payroll updated:', response.data);
        } catch (error) {
            setAlert('Failed to update payroll');
            setOpen(true);
            console.error('Error updating payroll:', error);
        }
    };

    const handleStatus = async () => {
        try {
            const payload = {
                "processed": true
              };  // Wrapping the boolean value in an object
            const response = await axios.put(
                `http://localhost:8090/api/notifications/${formData.notificationId}/processed`,
                payload,  // Passing the object as the payload
                {
                    headers: {
                        'Content-Type': 'application/json'  // Ensuring JSON content type
                    }
                }
            );
            setAlert('Notification status updated successfully!');
            setOpen(true);
            console.log('Notification status updated:', response.data);
        } catch (error) {
            setAlert('Failed to update Notification status');
            setOpen(true);
            console.error('Error updating Notification status:', error);
        }
    };
    

    const handleClose = () => {
        setOpen(false);
    };


    const handleClear = () => {
        setFormData({
            employeeId: '',
            employeeName: '',
            basicSalary: '',
            otHours: '',
            workingDays: '',
            taxPercentage: '',
            deductions: '',
            allowance: '',
            payrollDate: new Date().toISOString().slice(0, 10), // format to YYYY-MM-DD
            payrollStartDate: new Date().toISOString().slice(0, 10), // format to YYYY-MM-DD
            payrollEndDate: new Date().toISOString().slice(0, 10), // format to YYYY-MM-DD
            netPay: ''
        });
    };


    return (
        <ThemeProvider theme={theme}>
          <Container style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, padding: '20px', marginTop: '20px', borderRadius: '5px' }}>
                <Typography variant="h6" style={{ color: theme.palette.text.primary }}>Payroll Entry</Typography>
                <form onSubmit={handleSubmit & sendConfirmationToHR}>
                    <Grid container spacing={2}>
                        {Object.keys(formData).map((key) => (
                            key !== 'netPay' && (
                                <Grid item xs={12} sm={6} key={key}>
                                    <TextField
                                        fullWidth
                                        label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                                        name={key}
                                        value={formData[key]}
                                        onChange={handleChange}
                                        onBlur={key === 'employeeId' ? handleFetchEmployee : null}
                                        type={key.includes('Date') ? 'date' : 'text'}
                                        required
                                        InputLabelProps={{
                                            style: { color: theme.palette.text.primary }
                                        }}
                                        InputProps={{
                                            style: { color: theme.palette.text.primary }
                                        }}
                                    />
                                </Grid>
                            )
                        ))}
                    </Grid>
                    <Button onClick={calculateNetPay} color="primary" variant="contained" style={{ marginRight: '10px', marginTop: '20px' }}>Calculate</Button>
                    {formData.netPay && (
                        <Typography component="span" style={{ marginTop: '23px', marginRight: '10px', display: 'inline-block' }}>
                            Net Pay: {formData.netPay.toFixed(2)}
                        </Typography>
                    )}
                    <Button onClick={handleSave} color="secondary" variant="contained" style={{ marginTop: '20px' }}>Save</Button>
                    <Button onClick={handleUpdate} color="primary" variant="contained" style={{ marginTop: '20px', marginLeft: '10px' }}>Update</Button>
                    <Button onClick={handleClear} color="primary" variant="contained" style={{ marginTop: '20px', marginLeft: '10px' }}>Clear</Button>

                </form>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        {alert}
                    </Alert>
                </Snackbar>
            </Container>
        </ThemeProvider>
    );
}

export default PayrollEntry;
