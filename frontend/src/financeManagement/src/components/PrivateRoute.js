// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, allowedRoles }) => {
    const { user } = useAuth();

    return user && allowedRoles.includes(user.role) ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
