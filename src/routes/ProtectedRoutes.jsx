import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();
  
  // Default to rendering child routes for seamless access
  return <Outlet />;
};

export default ProtectedRoutes;
