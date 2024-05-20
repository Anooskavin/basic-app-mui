import './App.css';
import {  RouterProvider  ,BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import useAuth from './hooks/useAuth.js';
import { useEffect, useState } from 'react';
import router from './components/Route.tsx'
import React from 'react';
import { useThemeContext } from './theme/ThemeContextProvider.tsx';
import { CssBaseline, ThemeProvider } from "@mui/material";



function App() {
  const {isAuthenticated} = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    });
  }, []);

  const { theme } = useThemeContext();


  return (
<ThemeProvider theme={theme}> 
      <CssBaseline />
    
    <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
