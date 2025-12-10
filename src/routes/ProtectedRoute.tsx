import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

type Props = {
    allowedRoles: ('guest' | 'user' | 'admin')[];
    children: React.ReactNode;
};

export function ProtectedRoute({ allowedRoles, children }: Props) {
    const { role } = useAuth();
    const location = useLocation();

    if (!allowedRoles.includes(role)) {
        // Redirect to login page preserving the intended location
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
}
