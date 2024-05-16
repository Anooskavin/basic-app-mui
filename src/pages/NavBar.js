import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Grid,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Tab,
  Tabs,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FoundationRoundedIcon from "@mui/icons-material/FoundationRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import NightlightRoundRoundedIcon from '@mui/icons-material/NightlightRoundRounded';
import { Link } from "react-router-dom";


const defaultTheme = createTheme({
  typography: {
    fontFamily: ["BlinkMacSystemFont"].join(","),
    fontSize: 12,
  },
});


export default function NavBar(props) {
  const [searchHovered, setSearchHovered] = useState(false);
  const [themeHovered, setThemeHovered] = useState(false);
  
  const [theme, setTheme] = useState(localStorage.getItem('theme') )

  console.log(localStorage.getItem('theme') +"hello" || 'dark');

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };



  
  const navBarMenus = ["Home", "Get Started", "Develop", "Login"];


function changeTheme(){
  if(theme === 'dark'){
    setTheme('light')
    props.theme('light')
    localStorage.setItem('theme','light')
  }
  else{
    setTheme('dark')
    props.theme('dark')
    localStorage.setItem('theme','dark')

  }

}

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Container maxWidth="sm" > */}
      <CssBaseline />
      <Box
        sx={{
          //   marginTop: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          // position: 'fixed',
          textAlign: "center", 
          bgcolor: theme ==="dark" ?  "#211F21" : '#f2ecee',
          height: "100vh",
          width: "10vh",
        }}
      >
        <Grid>
          <Grid item xs={6} sm={12}>
            <Avatar
              sx={{
                ml: 0.5,
                bgcolor: theme === 'dark' ? "#553f5d" : '#dcdaf5',
                width: 60,
                height: 60,
                borderRadius: 3,
                mb: 3,
                mt: 3,
              }}
              onMouseEnter={() => setSearchHovered(true)}
              onMouseLeave={() => setSearchHovered(false)}
            >
              <SearchIcon
                style={{ fill: theme =="dark" ? "white" : "#4d4156" , color: theme ==='dark' ? 'white' : "#5f5168" }}
              />
            </Avatar>
          </Grid>

          {navBarMenus.map((index, item) => (
            <Grid item xs={6} sm={12} key={index}>
              <Avatar
                sx={{
                  ml: 0.5,
                  bgcolor: navBarMenus[item] === props.page ? theme === 'dark' ?  "#553f5d" : "#dcdaf5" : hoveredIndex === index ? theme === 'dark' ? "#553f5d" :  "#dcdaf5" :"transparent",
                  width: 60,
                  // height: 40,
                  borderRadius: 5,
                  opacity: hoveredIndex === index ? 0.8 : 1,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {navBarMenus[item] == "Home" ? (
                 <Link to="/" > <FoundationRoundedIcon style={{ color: theme ==='dark' ? 'white' : "#4d4156" }}  /> </Link> 
                ) : navBarMenus[item] == "Get Started" ? (
                  <Link to="/launch" ><AppsOutlinedIcon style={{ color: theme ==='dark' ? 'white' : "#4d4156" }} /> </Link> 
                ) : navBarMenus[item] == "Develop" ? (
                  <Link to="/" ><CodeOutlinedIcon style={{ color: theme ==='dark' ? 'white' : "#4d4156" }} /> </Link> 
                ) : navBarMenus[item] == "Login" ? (
                  <Link to="/" ><BookRoundedIcon style={{ color: theme ==='dark' ? 'white' : "#4d4156" }} /> </Link> 
                ) : (
                  <></>
                )}
              </Avatar>
              <Typography variant="subtitle2" color={theme === "dark" ? "#dfddf8" : "#4d4156"} mb={2}>
                {navBarMenus[item]}
              </Typography>
            </Grid>
          ))}

          {/* <Grid item xs={6} sm={12}>
            <Avatar
              sx={{
                ml: 1,
                bgcolor: "#553f5d",
                width: 60,
                // height: 40,
                borderRadius: 5,
              }}
              //   onMouseEnter={() => setSearchHovered(true)}
              //   onMouseLeave={() => setSearchHovered(false)}
            >
              <FoundationRoundedIcon />
            </Avatar>
            <Typography variant="subtitle2" color={"#dfddf8"} mb={2}>
              Home
            </Typography>
          </Grid>

          <Grid item xs={6} sm={12}>
            <Avatar
              sx={{
                ml: 1,
                bgcolor: "#553f5d",
                width: 60,
                // height: 40,
                borderRadius: 5,
              }}
              //   onMouseEnter={() => setSearchHovered(true)}
              //   onMouseLeave={() => setSearchHovered(false)}
            >
              <AppsOutlinedIcon />
            </Avatar>
            <Typography variant="subtitle2" color={"#dfddf8"} mb={2}>
              Get Started
            </Typography>
          </Grid>

          <Grid item xs={6} sm={12}>
            <Avatar
              sx={{
                ml: 1,
                bgcolor: "#553f5d",
                width: 60,
                // height: 40,
                borderRadius: 5,
              }}
              //   onMouseEnter={() => setSearchHovered(true)}
              //   onMouseLeave={() => setSearchHovered(false)}
            >
              <CodeOutlinedIcon />
            </Avatar>
            <Typography variant="subtitle2" color={"#dfddf8"} mb={2}>
              Develop
            </Typography>
          </Grid>

          <Grid item xs={6} sm={12}>
            <Avatar
              sx={{
                ml: 1,
                bgcolor: "#553f5d",
                width: 60,
                // height: 40,
                borderRadius: 5,
              }}
              //   onMouseEnter={() => setSearchHovered(true)}
              //   onMouseLeave={() => setSearchHovered(false)}
            >
              <BookRoundedIcon />
            </Avatar>
            <Typography variant="subtitle2" color={"#dfddf8"} mb={2}>
              Login
            </Typography>
          </Grid> */}
        </Grid>

        <Grid item xs={6} sm={12} mb={2}>
          <div onClick={changeTheme}>
          <Avatar
            sx={{
              ml: 1,
              bgcolor: themeHovered ? "#808080" : "transparent",
              width: 50,
              height: 50,
              borderRadius: "50%",
              border: "2px solid #6a686c",
            }}
            onMouseEnter={() => setThemeHovered(true)}
            onMouseLeave={() => setThemeHovered(false)}
            
          >

            { theme === 'dark' ? themeHovered ? (
              <WbSunnyRoundedIcon  style={{ fill: "white" }} />
            ) : (
              <WbSunnyOutlinedIcon />
            ) : <></> }

            { theme === 'light' ? themeHovered ? (
              <NightlightRoundRoundedIcon   />
            ) : (
              <NightlightRoundRoundedIcon style={{ fill: "black" }} />
            ) : <></>}

          </Avatar>
          </div>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
