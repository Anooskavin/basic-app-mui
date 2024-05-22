import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from './NavBar.tsx';
import { Box } from '@mui/material';


const ProtectedRoute = ( ) => {

  
  if (localStorage.getItem("basic-app")==null) {
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