import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
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
        secondary: '#FFFFFF', // Secondary text color, slightly lighter
      }
    },
});


function PayrollNotifications() {
    const [notifications, setNotifications] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get('http://localhost:8090/api/notifications', {
                    headers: { Authorization: `Bearer ${user.token}` }
                });
                setNotifications(response.data);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        if (user) {
            fetchNotifications();
        }
    }, [user]);

    const handleProcessPayroll = (notification) => {
        navigate('/payroll-entry', { state: { notification } });
    };

    const handleDeleteNotification = async (id) => {
        try {
            await axios.delete(`http://localhost:8090/api/notifications/${id}`, {
                headers: { Authorization: `Bearer ${user.token}` }
            });
            setNotifications(notifications.filter(notification => notification.notificationId !== id));
        } catch (error) {
            console.error('Error deleting notification:', error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Paper style={{ margin: '20px', backgroundColor: theme.palette.background.paper }}>
                <Typography variant="h6" style={{ margin: '10px', color: theme.palette.text.primary }}>HR System Requests</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                 {/* <TableCell style={{ color: theme.palette.text.secondary }}>Notification ID</TableCell> */}
                                <TableCell style={{ color: theme.palette.text.secondary }}>Employee ID</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Processed Status</TableCell>
                                <TableCell style={{ color: theme.palette.text.secondary }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {notifications.map((notification) => (
                                <TableRow key={notification.notificationId}>
                                    {/* <TableCell>{notification.notificationId}</TableCell> */}
                                    <TableCell>{notification.employeeId}</TableCell>
                                    <TableCell>{notification.processed ? "Processed" : "Pending"}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => handleProcessPayroll(notification)}
                                            disabled={notification.processed}
                                        >
                                            Process Payroll
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => handleDeleteNotification(notification.notificationId)}
                                            style={{ marginLeft: '10px' }}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </ThemeProvider>
    );
}

export default PayrollNotifications;
