import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from './NavBar.tsx';


const ProtectedRoute = ( ) => {

  console.log("hello-pr")
  if (localStorage.getItem("basic-app")==null) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={{ display: "flex", flexDirection: "row"  }}>
      <NavBar  />
      <Outlet />
    </div>
);
};

export default ProtectedRoute;