import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
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
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";

const defaultTheme = createTheme({
  typography: {
    fontFamily: ["sans-serif"].join(","),
  },
});

// contextprovider,(theme provoder)
// life component
// 

export default function Home() {

    const [theme, setTheme] = useState('')

    useEffect(()=>{

    },[localStorage.getItem('theme')])

    function getTheme(value){
            // console.log(value);
            setTheme(value)
    }
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <NavBar page={"Home"} theme={getTheme} />
      <div
        style={{
          backgroundColor: localStorage.getItem('theme') === "dark"  ?     "#141314" : "#fefbff" ,
          width: "100%",
          height: "100vh",
          overflow: "auto",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* <ThemeProvider theme={defaultTheme}>
      <CssBaseline />   */}

        <Box
          m={1}
          sx={{
            bgcolor: localStorage.getItem('theme') === 'dark' ?  "#1c1b1d"  : '#f8f1f6' ,
            height: "50vh",
            width: "50%",
            borderRadius: 3,

            color:  localStorage.getItem('theme') === 'dark' ?   "#e6e1e3" : "black" ,
            marginTop: "20px",
          }}
        >
          <Typography variant="h3" sx={{ fontSize: 82, padding: 4 }}>
            Welcome, {localStorage.getItem("username")}
          </Typography>

          <Typography
            variant="h1"
            sx={{ fontSize: 32, textAlign: "justify", padding: 4 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Typography>

          <Button
            variant="contained"
            sx={{
              padding: 1,
              borderRadius: 5,
              marginLeft: 4,
              bgcolor: "#9f86fe",
              color: "black",
              "&:hover": {
                bgcolor: "#7e62d0",
              },
            }}
          >
            {" "}
            <span
              style={{
                textTransform: "none",
                color: localStorage.getItem('theme') === 'dark' ? "black" : "white",
                fontSize: 25,
                padding: 9,
              }}
            >
              Click Here
            </span>
          </Button>
        </Box>
        <Box
          m={1}
          sx={{
            bgcolor: "#1c1b1d",
            height: "50vh",
            width: "50%",
            borderRadius: 3,

            color:  localStorage.getItem('theme') === 'dark' ?   "#e6e1e3" : "black" ,
            marginTop: "20px",
          }}
        >
          <CardMedia
            component="video"
            loop={true}
            //   height="140"
            image="./Google_Mio_SizzleGIF_3840x2160.mp4"
            title="video"
            autoPlay={true}
            style={{ borderRadius: 3 }}
          />
        </Box>

        {/* </ThemeProvider> */}
      </div>
    </div>
  );
}
