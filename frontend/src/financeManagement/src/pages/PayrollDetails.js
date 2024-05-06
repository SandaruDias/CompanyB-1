import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { fetchPayrolls, deletePayroll } from '../api/payrollService';
import { TextField, Button, Container, Typography, Grid, Paper, Snackbar, Alert, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Adjust the color theme for better readability and aesthetics
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
      secondary: '#FFFFFF', // Secondary text color, slightly lighter
    }
  },
});

function PayrollDetails() {
    const [allPayrolls, setAllPayrolls] = useState([]);
    const [payrolls, setPayrolls] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchPayrolls().then(response => {
            setAllPayrolls(response.data);
            setPayrolls(response.data);
        }).catch(error => console.error('Failed to fetch payrolls', error));
    }, []);

    const handleDelete = (id) => {
        deletePayroll(id).then(() => {
            setPayrolls(payrolls.filter(p => p.payrollId !== id));
        }).catch(error => console.error('Failed to delete payroll', error));
    };

    const handleEdit = (payroll) => {
        navigate('/payroll-entry', { state: { payroll } });
    };

    const handleSearch = () => {
        const filteredPayrolls = allPayrolls.filter(p => 
            p.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) || 
            p.employeeName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setPayrolls(filteredPayrolls);
    };

    const handleClearSearch = () => {
        setSearchTerm("");
        setPayrolls(allPayrolls);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, padding: '20px', marginTop: '20px', borderRadius: '5px' }}>
                <Typography variant="h4" gutterBottom style={{ color: theme.palette.text.primary }}>Payroll Details</Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <TextField 
                            label="Search by ID or Name" 
                            variant="outlined"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            InputLabelProps={{
                                style: { color: theme.palette.text.primary }
                            }}
                            InputProps={{
                                style: { color: theme.palette.text.primary }
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Button onClick={handleSearch} color="primary" variant="contained">Search</Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleClearSearch} color="secondary" variant="contained">Clear Search</Button>
                    </Grid>
                </Grid>
                <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ color: theme.palette.text.secondary }} >Payroll ID</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Employee ID</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Employee Name</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Basic Salary</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Allowance</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Deductions</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Net Pay</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Payroll Date</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {payrolls.map(payroll => (
                                <TableRow key={payroll.payrollId}>
                                    <TableCell>{payroll.payrollId}</TableCell>
                                    <TableCell>{payroll.employeeId}</TableCell>
                                    <TableCell>{payroll.employeeName}</TableCell>
                                    <TableCell>{payroll.basicSalary.toFixed(2)}</TableCell>
                                    <TableCell>{payroll.allowance.toFixed(2)}</TableCell>
                                    <TableCell>{payroll.deductions.toFixed(2)}</TableCell>
                                    <TableCell>{payroll.netPay.toFixed(2)}</TableCell>
                                    <TableCell>{payroll.payrollDate}</TableCell>

                                    <TableCell>
                                        <Button color="primary" onClick={() => handleEdit(payroll)}>Edit</Button>
                                        <Button color="error" onClick={() => handleDelete(payroll.payrollId)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </ThemeProvider>
    );
}

export default PayrollDetails;

