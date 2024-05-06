import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { TextField, Button, createTheme, ThemeProvider } from '@mui/material';

// Define the theme
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

function Login() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        const success = await auth.login(credentials.username, credentials.password);
        if (success) {
            navigate('/');  // Redirect to the homepage or dashboard
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{ padding: 20, maxWidth: 400, margin: '0 auto', backgroundColor: theme.palette.background.default }}>
                <TextField
                    fullWidth
                    label="Username"
                    variant="outlined"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    margin="normal"
                    InputLabelProps={{
                        style: { color: theme.palette.text.primary }
                    }}
                    InputProps={{
                        style: { color: theme.palette.text.primary }
                    }}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    margin="normal"
                    InputLabelProps={{
                        style: { color: theme.palette.text.primary }
                    }}
                    InputProps={{
                        style: { color: theme.palette.text.primary }
                    }}
                />
                <Button
                    fullWidth
                    onClick={handleLogin}
                    variant="contained"
                    color="primary"
                    style={{ marginTop: 20 }}
                >
                    Login
                </Button>
            </div>
        </ThemeProvider>
    );
}

export default Login;

