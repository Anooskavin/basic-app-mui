import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from './NavBar.tsx';
import { Box } from '@mui/material';
import useAuth from '../hooks/useAuth.tsx';


const ProtectedRoute = ( ) => {

  const { cookies } = useAuth();

  console.log(cookies.get('access_token'))

  if (cookies.get('access_token')==null ) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Box style={{ display: "flex", flexDirection: "row"  }}>
      <NavBar  />
      <Outlet />
    </Box>
);
};

export default ProtectedRoute;