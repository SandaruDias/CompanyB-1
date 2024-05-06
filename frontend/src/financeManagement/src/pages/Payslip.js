// src/pages/Payslip.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography } from '@mui/material';
import FileDownload from 'js-file-download';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define the theme using the colors provided
const theme = createTheme({
    palette: {
        primary: {
            main: '#124E66', // Dark teal for important elements
        },
        secondary: {
            main: '#748D92', // Medium gray-blue for secondary elements
        },
        error: {
            main: '#E53935', // Red for error messages
        },
        background: {
            default: '#E2E2E2', // Light gray for the general background
            paper: '#FFFFFF', // White for paper components
        },
        text: {
            primary: '#212A31', // Dark blue for main text
            secondary: '#FFFFFF', // Lighter blue for secondary text
        }
    },
});

function Payslip() {
    const [payslips, setPayslips] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const fetchPayslips = async () => {
            try {
                const response = await axios.get(`http://localhost:8090/api/payroll/employee/${user.id}`, {
                    headers: { Authorization: `Bearer ${user.token}` }
                });
                setPayslips(response.data);
            } catch (error) {
                console.error('Error fetching payslips:', error);
            }
        };

        if (user) {
            fetchPayslips();
        }
    }, [user]);

    const handleDownload = async () => {
        try {
            const response = await axios.get(`http://localhost:8090/api/payroll/download/${user.id}`, {
                responseType: 'blob', // Important for handling binary data
                headers: { Authorization: `Bearer ${user.token}` }
            });
            FileDownload(response.data, 'payslips.xlsx');
        } catch (error) {
            console.error('Error downloading payslips:', error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Paper style={{ margin: '20px', padding: '20px', backgroundColor: theme.palette.background.paper }}>
                <Typography variant="h6" style={{ color: theme.palette.text.primary, margin: '10px 0' }}>Payslip Details</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ color: theme.palette.text.secondary }}>Payroll ID</TableCell>
                            <TableCell style={{ color: theme.palette.text.secondary }}>Employee ID</TableCell>
                            <TableCell style={{ color: theme.palette.text.secondary }}>Employee Name</TableCell>
                            <TableCell style={{ color: theme.palette.text.secondary }}>Basic Salary</TableCell>
                            {/* <TableCell style={{ color: theme.palette.tsecondarymary }}>Gross Pay</TableCell> */}
                            <TableCell style={{ color: theme.palette.text.secondary }}>Net Pay</TableCell>
                            <TableCell style={{ color: theme.palette.text.secondary }}>Payroll Date</TableCell>
                            <TableCell style={{ color: theme.palette.text.secondary }}>Payroll Start Date</TableCell>
                            <TableCell style={{ color: theme.palette.text.secondary }}>Payroll End Date</TableCell>     
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {payslips.map((payslip, index) => (
                            <TableRow key={index}>
                                <TableCell style={{ color: theme.palette.text.secondary }}>{payslip.payrollId}</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>{payslip.employeeId}</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>{payslip.employeeName}</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>{payslip.basicSalary.toFixed(2)}</TableCell>
                                {/* <TableCell style={{ color: theme.palette.text.secondary }}>{payslip.grosspay}</TableCell> */}
                                <TableCell style={{ color: theme.palette.text.secondary }}>{payslip.netPay.toFixed(2)}</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>{payslip.payrollDate}</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>{payslip.payrollStartDate}</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>{payslip.payrollEndDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button onClick={handleDownload} variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Download Excel
                </Button>
            </Paper>
        </ThemeProvider>
    );
}

export default Payslip;
