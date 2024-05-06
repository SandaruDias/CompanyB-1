// import React, { useState, useEffect, useCallback } from 'react';
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { TextField, Button, Container, Typography, Grid, Paper, Snackbar, Alert } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#124E66',
//         },
//         secondary: {
//             main: '#748D92',
//         },
//         error: {
//             main: '#E53935',
//         },
//         background: {
//             default: '#E2E2E2',
//             paper: '#FFFFFF',
//         },
//         text: {
//             primary: '#212A31',
//             secondary: '#2E3944',
//         }
//     },
// });



// function InvoiceEntry() {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [formData, setFormData] = useState({
//         orderId: '',
//         customerId: '',
//         orderDate: new Date().toISOString().slice(0, 10), // format to YYYY-MM-DD
//         invoceDate: new Date().toISOString().slice(0, 10), // format to YYYY-MM-DD
//         paymentMethod: '',
//         subtotal: 0,
//         tax: 0,
//         total: 0,
//         paymentStatus: 'Pending',
//     });
//     const [open, setOpen] = useState(false);
//     const [alert, setAlert] = useState('');

//     useEffect(() => {
//         if (location.state && location.state.invoice) {
//             const { invoice} = location.state;
//             setFormData({ ...formData, ...invoice });
//         }
//     }, [location]);

//     useEffect(() => {
//         if (location.state && location.state.orderId) {
//             const { orderId} = location.state;
//             setFormData({ ...formData, orderId});
//         }
//     }, [location]);

//     const fetchOrderDetails = useCallback(async (orderId) => {
//         try {
//             const { data } = await axios.get(`http://localhost:8090/api/orders/${orderId}`);
//             if (data) {
//                 setFormData(prevState => ({
//                     ...prevState,
//                     customerId: data.customerId,
//                     subtotal: data.amount,
//                     paymentMethod: prevState.paymentMethod,
//                     total: (parseFloat(data.amount) + parseFloat(prevState.tax)).toFixed(2),
//                 }));
//             }
//         } catch (error) {
//             console.error('Error fetching order details:', error);
//             setAlert('Failed to fetch order details. Please check the Order ID.');
//             setOpen(true);
//         }
//     }, []);

//     useEffect(() => {
//         if (formData.orderId) {
//             const timer = setTimeout(() => fetchOrderDetails(formData.orderId), 500);
//             return () => clearTimeout(timer);
//         }
//     }, [formData.orderId, fetchOrderDetails]);

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData(prev => {
//             const updatedData = { ...prev, [name]: value };

//             if (name === 'tax') {
//                 updatedData.total = (parseFloat(updatedData.subtotal) + parseFloat(value)).toFixed(2);
//             }

//             return updatedData;
//         });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8090/api/invoices', formData);
//             console.log('Invoice saved:', response.data);
//             navigate('/invoice-details');
//         } catch (error) {
//             console.error('Failed to save invoice:', error);
//             setAlert('Failed to save invoice. Please try again.');
//             setOpen(true);
//         }
//     };

//     const handleClose = () => setOpen(false);

//     return (
//         <ThemeProvider theme={theme}>
//             <Container component={Paper} style={{ padding: '20px', marginTop: '20px' }}>
//                 <Typography variant="h6">Invoice Entry</Typography>
//                 <form onSubmit={handleSubmit}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 fullWidth
//                                 label="Order ID"
//                                 name="orderId"
//                                 value={formData.orderId}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 fullWidth
//                                 label="Customer ID"
//                                 name="customerId"
//                                 value={formData.customerId}
//                                 onChange={handleChange}
//                                 disabled
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 fullWidth
//                                 label="Subtotal"
//                                 name="subtotal"
//                                 value={formData.subtotal}
//                                 onChange={handleChange}
//                                 disabled
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 fullWidth
//                                 label="Tax"
//                                 name="tax"
//                                 type="number"
//                                 value={formData.tax}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 fullWidth
//                                 label="Total"
//                                 name="total"
//                                 value={formData.total}
//                                 disabled
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 fullWidth
//                                 label="Payment Status"
//                                 name="paymentStatus"
//                                 value={formData.paymentStatus}
//                                 onChange={handleChange}
//                             />
//                         </Grid>
//                     </Grid>
//                     <Button type="submit" color="primary" variant="contained" style={{ marginTop: '20px' }}>Generate Invoice</Button>
//                 </form>
//                 <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//                     <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
//                         {alert}
//                     </Alert>
//                 </Snackbar>
//             </Container>
//         </ThemeProvider>
//     );
// }

// export default InvoiceEntry;


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { TextField, Button, Container, Typography, Grid, Paper, Snackbar, Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#124E66',
        },
        secondary: {
            main: '#748D92',
        },
        error: {
            main: '#E53935',
        },
        background: {
            default: '#E2E2E2',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#212A31',
            secondary: '#2E3944',
        }
    },
});

function InvoiceEntry() {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({
        orderId: '',
        customerId: '',
        orderDate: new Date().toISOString().slice(0, 10),
        invoiceDate: new Date().toISOString().slice(0, 10),
        paymentMethod: '',
        subtotal: 0,
        tax: 0,
        total: 0,
        paymentStatus: 'Pending',
    });
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState('');


    useEffect(() => {
        if (location.state && location.state.invoice) {
            const { invoice } = location.state;
            setFormData({ ...formData, ...invoice, invoiceId: invoice.invoiceId });
        }
    }, [location]);

    useEffect(() => {
        if (location.state && location.state.notification) {
            const { notification } = location.state;
            setFormData({ ...formData, orderId: notification.orderId, notificationId: notification.id });
        }
    }, [location.state]);

    // Update total when tax changes
    useEffect(() => {
        if (formData.tax && formData.subtotal) {
            setFormData(prevState => ({
                ...prevState,
                total: (parseFloat(formData.subtotal) + parseFloat(formData.tax)).toFixed(2)
            }));
        }
    }, [formData.tax, formData.subtotal]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submit behavior

        if (!formData.orderId) {
            alert('Order ID is required');
            return;
        }

        const url = formData.id ? `http://localhost:8090/api/invoices/${formData.id}` : 'http://localhost:8090/api/invoices';
        const method = formData.id ? 'put' : 'post';

        try {
            await axios({
                method: method,
                url: url,
                data: formData
            });
            console.log('Invoice saved or updated');
            setFormData({
                orderId: '',
                customerId: '',
                orderDate: new Date().toISOString().slice(0, 10),
                invoiceDate: new Date().toISOString().slice(0, 10),
                paymentMethod: '',
                subtotal: 0,
                tax: 0,
                total: 0,
                paymentStatus: 'Pending',
            }); // Reset the form data
            navigate('/invoice-details'); // Navigate back to the details view
        } catch (error) {
            console.error('Failed to save or update invoice:', error);
        }
    };

    const handleFetchOrder = async () => {
        if (!formData.orderId) {
            setAlert('Please enter an Order ID');
            setOpen(true);
            return;
        }
        try {
            const response = await axios.get(`http://localhost:8090/order/${formData.orderId}`);
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
                setAlert('Order ID not found');
                setOpen(true);
            }
        } catch (error) {
            setAlert('Error fetching order data');
            setOpen(true);
            console.error('Error fetching order:', error);
        }
    };

    const handleSave = async () => {
        if (!formData.orderId || !formData.tax || !formData.total) {
            setAlert('Please fill out all fields before saving');
            setOpen(true);
            return;
        }
        try {
            const response = await axios.post('http://localhost:8090/api/invoices', formData);
            setAlert('Invoice saved successfully!');
            setOpen(true);
            console.log('Invoice saved:', response.data);
        } catch (error) {
            setAlert('Failed to save invoice');
            setOpen(true);
            console.error('Error saving invoice:', error);
        }
    };


    const handleUpdate = async () => {
        if (!formData.orderId || !formData.tax || !formData.total) {
            setAlert('Please fill out all fields before saving');
            setOpen(true);
            return;
        }
        try {
            const response = await axios.put(`http://localhost:8090/api/invoices/${formData.invoiceId}`, formData);
            setAlert('Invoice updated successfully!');
            setOpen(true);
            console.log('Invoice updated:', response.data);
        } catch (error) {
            setAlert('Failed to update invoice');
            setOpen(true);
            console.error('Error updating invoice:', error);
        }
    };

    const handleStatus = async () => {
        try {
            const payload = {
                "processed": true
              };  // Wrapping the boolean value in an object
            const response = await axios.put(
                `http://localhost:8090/api/sales-notifications/${formData.notificationId}/processed`,
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
    };;


    const handleClear = () => {
        setFormData({
            orderId: '',
            customerId: '',
            orderDate: new Date().toISOString().slice(0, 10),
            invoiceDate: new Date().toISOString().slice(0, 10),
            paymentMethod: '',
            subtotal: 0,
            tax: 0,
            total: 0,
            paymentStatus: 'Pending',
        });
    };

    return (
        <ThemeProvider theme={theme}>
          <Container style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, padding: '20px', marginTop: '20px', borderRadius: '5px' }}>
                <Typography variant="h6" style={{ color: theme.palette.text.primary }}>Invoice Entry</Typography>
                <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                        {Object.keys(formData).map((key) => (
                            key !== 'total' && (
                                <Grid item xs={12} sm={6} key={key}>
                                    <TextField
                                        fullWidth
                                        label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                                        name={key}
                                        value={formData[key]}
                                        onChange={handleChange}
                                        onBlur={key === 'orderId' ? handleFetchOrder : null}
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
                    <Button onClick={handleSave} color="secondary" variant="contained" style={{ marginTop: '20px' }}>Generate Invoice</Button>
                    {formData.total && (
                        <Typography component="span" style={{ marginTop: '23px', marginRight: '10px', display: 'inline-block' }}>
                            Total :  {formData.total}
                        </Typography>
                    )}
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

export default InvoiceEntry;
