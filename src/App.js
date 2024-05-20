import './App.css';
import {  RouterProvider  ,BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import Login from './pages/Login';
import useAuth from './hooks/useAuth';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import Load from './pages/Load';
import Launch from './pages/Launch';
import router from './components/Route'
import React from 'react';
import { useThemeContext } from './theme/ThemeContextProvider';
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
