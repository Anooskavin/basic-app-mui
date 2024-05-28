import React, { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Box, Grid, TextField, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import useAuth from "../hooks/useAuth.tsx";



const defaultTheme =  createTheme()


export default function Login() {

  const [errorMessage, setErrorMessage] =  useState<String>("")
  const { handleLogin } = useAuth()

  async function submitForm(event){
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formDataUsername: any  = data.get('username') ;
    const formDataPassword: any = data.get('password');

   
    const loginData = {
      username : formDataUsername,
      password : formDataPassword
    };

    const response =  await handleLogin(loginData);

    console.log( response);

    if(response.status == 401){
      setErrorMessage("Login Failed")
    }else if(response.status == 200){
      setErrorMessage("")
      window.location.replace('/');
    }else{
      setErrorMessage("Network Error")
    }
    

 
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
