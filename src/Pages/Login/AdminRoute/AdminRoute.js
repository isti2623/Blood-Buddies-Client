import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { user, admin, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <div className='text-center'>
            <Spinner animation="border" variant="danger" />
        </div>
    }


    if (user.email && !admin) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
}

export default AdminRoute;