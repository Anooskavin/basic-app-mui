import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import {
  Avatar,
  Grid,
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tab,
  Tabs,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CardMedia } from "@mui/material";

import Button from "@mui/material/Button";
import { useThemeContext } from "../theme/ThemeContextProvider";


const defaultTheme = createTheme({
  typography: {
    fontFamily: ["sans-serif"].join(","),
  },
});
export default function Launch() {

    


    
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <NavBar page={"Get Started"}  />
      <div
        style={{
        bgcolor: "background.default",
        color: "text.primary",
          width: "100%",
          height: "100vh",
          overflow: "auto",
        }}
      >
        {/* <ThemeProvider theme={defaultTheme}>
          <CssBaseline /> */}

          <Typography
            variant="h3"
            sx={{ fontSize: 72, 
                 padding: 8 }}
          >
            {" "}
            News & Launches{" "}
          </Typography>

          <div style={{ display: "flex", flexDirection: "row" }}>
          <Box
           
            sx={{
              marginLeft: 5,
              bgcolor:  "divider"   ,
              height: "50vh",
              width: "30%",
              borderRadius: 3,
              marginTop: "20px",
            }}
          >
            <CardMedia
              component="video"
              loop={true}
              image="./Google_Mio_SizzleGIF_3840x2160.mp4"
              title="video"
              autoPlay={true}
              style={{ borderRadius: 5 }}
            />

            <Typography
              variant="h1"
              sx={{ fontSize: 24, textAlign: "justify", padding: 4 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
          </Box>

          <Box
            m={1}
            sx={{
                bgcolor:  "divider"   ,
                height: "50vh",
              width: "30%",
              borderRadius: 3,
              marginTop: "20px",
            }}
          >
            <CardMedia
              component="video"
              loop={true}
              image="./Google_Mio_SizzleGIF_3840x2160.mp4"
              title="video"
              autoPlay={true}
              style={{ borderRadius: 5 }}
            />

            <Typography
              variant="h1"
              sx={{ fontSize: 24, textAlign: "justify", padding: 4 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s 
            </Typography>
          </Box>



          <Box
           
            sx={{
             
                bgcolor:  "divider"   ,
                height: "50vh",
              width: "30%",
              borderRadius: 3,
             marginTop: "20px",
            }}
          >
            <CardMedia
              component="video"
              loop={true}
              image="./Google_Mio_SizzleGIF_3840x2160.mp4"
              title="video"
              autoPlay={true}
              style={{ borderRadius: 5 }}
            />

            <Typography
              variant="h1"
              sx={{ fontSize: 24, textAlign: "justify", padding: 4 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
          </Box>

          
          </div>
        {/* </ThemeProvider> */}
      </div>
    </div>
  );
}
