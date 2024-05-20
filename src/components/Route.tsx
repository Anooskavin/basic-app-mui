import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login.tsx';
import Home from '../pages/Home.tsx';
import Launch from '../pages/Launch.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';



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