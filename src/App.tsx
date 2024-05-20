import './App.css';
import {  RouterProvider   } from 'react-router-dom';
import router from './components/Route.tsx'
import React from 'react';
import { useThemeContext } from './theme/ThemeContextProvider.tsx';
import { CssBaseline, ThemeProvider } from "@mui/material";



function App() {
  

  const { theme } = useThemeContext();



  return (
  <ThemeProvider theme={theme}> 
      <CssBaseline />
    <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
