import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Launch from '../pages/Launch';
import ProtectedRoute from './ProtectedRoute';


// const { isAuthenticated } = useAuth()

const router = createBrowserRouter(
  [
    {
      path: '/login',
      element: <Login />,
      index: true
    },
    {
      element: <ProtectedRoute  />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/launch',
          element: <Launch />
        },
      ]
    },
    {
      path: '*',
      element: <p>404 Error - Nothing here...</p>
    }
  ]
);

export default router;