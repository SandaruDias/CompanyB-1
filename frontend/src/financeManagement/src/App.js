import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import PayrollEntry from './pages/PayrollEntry';
import PayrollDetails from './pages/PayrollDetails';
import Payslip from './pages/Payslip';
import PayrollNotifications from './pages/PayrollNotifications.js';
import InvoiceEntry from './pages/InvoiceEntry';
import InvoiceDetails from './pages/InvoiceDetails';
import SalesNotifications from './pages/SalesNotifications.js';
import Login from './pages/Login';
import CustomerInvoice from './pages/CustomerInvoice.js';
import { Link as RouterLink } from 'react-router-dom';
import { List, ListItemButton, ListItemText, Collapse, Box } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Dashboard from './pages/Dashboard.js';

function NavBar() {
  const { user } = useAuth();
  const [openPayroll, setOpenPayroll] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);

  const handleClickPayroll = () => {
    setOpenPayroll(!openPayroll);
  };

  const handleClickInvoice = () => {
    setOpenInvoice(!openInvoice);
  };

  const closeMenus = () => {
    setOpenPayroll(false);
    setOpenInvoice(false);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      bgcolor: '#124E66', // Dark teal for navbar background
      color: 'white',
    }}>
      {user && (
        <>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2
          }}>
            <ListItemButton onClick={handleClickPayroll}>
              <ListItemText primary="Payroll" />
              {openPayroll ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <ListItemButton onClick={handleClickInvoice}>
              <ListItemText primary="Invoice" />
              {openInvoice ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </Box>
          <Collapse in={openPayroll} timeout="auto" unmountOnExit sx={{ position: 'absolute', zIndex: 1, width: '100%', bgcolor: '#124E66' }}>
            <List component="div" disablePadding>
              {user.role === 'Admin' && (
                <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/payroll-entry" onClick={closeMenus}>
                  <ListItemText primary="Payroll Entry" />
                </ListItemButton>
              )}
              {user.role === 'Admin' && (
                <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/payroll-details" onClick={closeMenus}>
                  <ListItemText primary="Payroll Details" />
                </ListItemButton>
              )}
              <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/payslip" onClick={closeMenus}>
                <ListItemText primary="View Payslip" />
              </ListItemButton>
              {user.role === 'Admin' && (
                <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/payroll-notifications" onClick={closeMenus}>
                  <ListItemText primary="Payroll Notifications" />
                </ListItemButton>
              )}
              {user.role === 'Admin' && (
                <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/" onClick={closeMenus}>
                  <ListItemText primary="DashBoard" />
                </ListItemButton>
              )}

            </List>
          </Collapse>
          <Collapse in={openInvoice} timeout="auto" unmountOnExit sx={{ position: 'absolute', zIndex: 1, width: '100%', bgcolor: '#124E66' }}>
            <List component="div" disablePadding>
              {user.role === 'Admin' && (
                <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/invoice-entry" onClick={closeMenus}>
                  <ListItemText primary="Generate Invoice" />
                </ListItemButton>
              )}
              {user.role === 'Admin' && (
                <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/invoice-details" onClick={closeMenus}>
                  <ListItemText primary="Invoice Details" />
                </ListItemButton>
              )}
              {user.role === 'Admin' && (
                <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/sales-notifications" onClick={closeMenus}>
                  <ListItemText primary="Sales Notifications" />
                </ListItemButton>
              )}
              {user.role === 'Admin' && (
                <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/customer-invoice" onClick={closeMenus}>
                  <ListItemText primary="Customer Invoice" />
                </ListItemButton>
              )}
              {user.role === 'Admin' && (
                <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/" onClick={closeMenus}>
                  <ListItemText primary="DashBoard" />
                </ListItemButton>
              )}
            </List>
          </Collapse>
        </>
      )}
    </Box>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <NavBar />
          <Routes>
            {/* Authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute allowedRoles={['Admin']}><Dashboard /></PrivateRoute>} />
            {/* Payroll Tab Routes */}
            <Route path="/payroll-entry" element={<PrivateRoute allowedRoles={['Admin']}><PayrollEntry /></PrivateRoute>} />
            <Route path="/payroll-details" element={<PrivateRoute allowedRoles={['Admin']}><PayrollDetails /></PrivateRoute>} />
            <Route path="/payslip" element={<PrivateRoute allowedRoles={['Employee', 'Admin']}><Payslip /></PrivateRoute>} />
            <Route path="/payroll-notifications" element={<PrivateRoute allowedRoles={['Admin']}><PayrollNotifications /></PrivateRoute>} />

            {/* Invoice Tab Routes */}
            <Route path="/invoice-entry" element={<PrivateRoute allowedRoles={['Admin']}><InvoiceEntry /></PrivateRoute>} />
            <Route path="/invoice-details" element={<PrivateRoute allowedRoles={['Admin']}><InvoiceDetails /></PrivateRoute>} />
            <Route path="/customer-invoice" element={<PrivateRoute allowedRoles={['Admin']}><CustomerInvoice /></PrivateRoute>} />
            <Route path="/sales-notifications" element={<PrivateRoute allowedRoles={['Admin']}><SalesNotifications /></PrivateRoute>} />

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

