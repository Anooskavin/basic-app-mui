import { render, screen } from '@testing-library/react';
import { createTheme } from "@mui/material";

import { CssBaseline, ThemeProvider } from "@mui/material";
import {  RouterProvider, createBrowserRouter    } from 'react-router-dom';





test('renders learn react link', () => {

  const mockTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  
  const mockRoutes = [
    {
      path: '/',
      element: <div>Home Page</div>,
    },
    {
      path: '/about',
      element: <div>About Page</div>,
    },
  ];
  
  const mockRouter = createBrowserRouter(mockRoutes, { initialEntries: ['/'] })

  render(
    <ThemeProvider theme={mockTheme}>
        <CssBaseline />
        <RouterProvider router={mockRouter} />
     </ThemeProvider>
  );
  expect(screen.getByText("Home Page")).toBeInTheDocument();
  
});



