import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCMS } from '../context/CMSContext';

export default function ProtectedRoute({ children }) {
    const { isAuthenticated } = useCMS();
    return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
}
