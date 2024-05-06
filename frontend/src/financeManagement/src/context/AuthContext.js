// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            // Fetch user details by ID
            // const response = await axios.get(`http://localhost:8090/api/user/${username}`);
            // const userDetails = response.data;
            const userDetails = {"id":"1","role":"Admin","password":"admin"}

            // Verify the password (this should ideally be done on the server to avoid security risks)
            if (userDetails && userDetails.password === password) {
                const loggedInUser = {
                    id: userDetails.id,
                    role: userDetails.role,
                    token: 'fake-jwt-token-for-' + username,  // Simulate a token generation
                };
                setUser(loggedInUser);
                return true;
            }
            return false;
        } catch (error) {
            console.error("Login error:", error);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
