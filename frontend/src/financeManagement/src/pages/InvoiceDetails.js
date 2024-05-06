import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { fetchInvoices, deleteInvoice } from '../api/invoiceService'; // Ensure these functions are implemented in your service
import { TextField, Button, Container, Typography, Grid, Paper, Snackbar, Alert, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#124E66', // Dark blue for primary elements
        },
        secondary: {
            main: '#748D92', // Medium gray-blue for secondary elements
        },
        error: {
            main: '#E53935', // Red for error states
        },
        background: {
            default: '#E2E2E2', // Light gray for background
            paper: '#FFFFFF', // White for paper elements
        },
        text: {
            primary: '#212A31', // Dark blue for text
            secondary: '#FFFFFF', // Slightly lighter blue for secondary text
        }
    },
});

function InvoiceDetails() {
    const [invoices, setInvoices] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchInvoices().then(response => {
            setInvoices(response.data);
        }).catch(error => console.error('Failed to fetch invoices', error));
    }, []);

    const handleDelete = (id) => {
        deleteInvoice(id).then(() => {
            setInvoices(invoices.filter(invoice => invoice.invoiceId !== id));
        }).catch(error => console.error('Failed to delete invoice', error));
    };

    const handleEdit = (invoice) => {
        navigate('/invoice-entry', { state: { invoice } });
    };

    const handleSearch = () => {
        const filteredInvoices = invoices.filter(invoice =>
            invoice.customerId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            invoice.orderId.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setInvoices(filteredInvoices);
    };

    const handleClearSearch = () => {
        setSearchTerm("");
        fetchInvoices().then(response => {
            setInvoices(response.data);
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, padding: '20px', marginTop: '20px', borderRadius: '5px' }}>
                <Typography variant="h4" gutterBottom style={{ color: theme.palette.text.primary }}>Invoice Details</Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <TextField
                            label="Search by Customer ID or Order ID"
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
                                <TableCell style={{ color: theme.palette.text.secondary }}>Invoice ID</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Order ID</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Customer ID</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Subtotal</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Tax</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Total</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Payment Status</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {invoices.map(invoice => (
                                <TableRow key={invoice.invoiceId}>
                                    <TableCell>{invoice.invoiceId}</TableCell>
                                    <TableCell>{invoice.orderId}</TableCell>
                                    <TableCell>{invoice.customerId}</TableCell>
                                    <TableCell>{invoice.subtotal ? Number(invoice.subtotal).toFixed(2) : 'N/A'}</TableCell>
                                    <TableCell>{invoice.tax ? Number(invoice.tax).toFixed(2) : 'N/A'}</TableCell>
                                    <TableCell>{invoice.total ? Number(invoice.total).toFixed(2) : 'N/A'}</TableCell>
                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                    <TableCell>
                                        <Button color="primary" onClick={() => handleEdit(invoice)}>Edit</Button>
                                        <Button color="error" onClick={() => handleDelete(invoice.invoiceId)}>Delete</Button>
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

export default InvoiceDetails;
