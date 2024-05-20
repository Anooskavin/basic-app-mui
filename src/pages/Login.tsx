import React, { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Box, Grid, TextField, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';


const defaultTheme =  createTheme()


export default function Login() {

  const [errorMessage, setErrorMessage] =  useState<String>("")

  function submitForm(event){
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formDataUsername = data.get('username');
    const formDataPassword = data.get('password');

    const username = formDataUsername !== null ? formDataUsername.toString() : '';
    const password = formDataPassword !== null ? formDataPassword.toString() : '';

    const loginData = {
      username,
      password,
    };
    
    fetch('http://127.0.0.1:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if(data.status === 200){
        console.log('Login response:', data);
        setErrorMessage("")
        localStorage.setItem("username",loginData.username)
        localStorage.setItem(loginData.username,Math.random().toString(36).substr(2))
        localStorage.setItem("basic-app",Math.random().toString(36).substr(2))
        window.location.replace('/')
      }
      else{
        console.log('Login response:', data);
        setErrorMessage("Login Failed")
      }
      

    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <ThemeProvider theme={defaultTheme}>
     <Container maxWidth="sm">
        <CssBaseline />
        <Box sx={{
          marginTop: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "#f0f0f5",
          borderRadius: 1,
        }} >
        <Avatar sx={{m:3, bgcolor: 'primary.main', width: 50, height: 50}}>
          <PersonIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
            Login In
        </Typography>
        <Box component='form' onSubmit={submitForm}  sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={12}>
              <TextField required autoComplete="given-name"
                  name="username"
                  fullWidth
                  id="username"
                  label="Username"
                  data-testid="username"
                  autoFocus />
            </Grid>
            <Grid item xs={6} sm={12}>
              <TextField required autoComplete="given-password"
                  name="password"
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  data-testid="password"
                  autoFocus />
            </Grid>
          </Grid>
          {errorMessage && <Typography    color="#FF0000">{errorMessage}</Typography>}
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 5 }}
              data-testid="submit"
            >
              Login
            </Button>
        </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
