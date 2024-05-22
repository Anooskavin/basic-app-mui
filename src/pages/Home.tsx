import React from "react";
import {
  Box,
  Typography
} from "@mui/material";

import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";


export default function Home() {   

    
  return (
    <Box >
      {/* <NavBar name={'Home'}  /> */}
      <Box
        style={{
          backgroundColor: 'background.default',
          width: "100%",
          height: "45vh",
          display: "flex",
          flexDirection: "row",
          color: "text.primary",
          paddingLeft: '6%'
        }}
      >
       

        <Box
          m={1}
          sx={{
            bgcolor: 'divider' ,
            minHeight: "45.5vh",
            width: "50%",
            borderRadius: 3,
            marginTop: "20px",
          }}
        >
          <Typography variant="h3" sx={{ fontSize: 82, padding: 4 ,color: "textcolor"}}>
            Welcome, {localStorage.getItem("username")}
          </Typography>

          <Typography
            variant="h1"
            sx={{ fontSize: 32, textAlign: "justify", padding: 4, color: "textcolor" }}
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
              bgcolor: "button.background",
              color: "text.button",
             
            }}
          >
            {" "}
            <span
              style={{
                textTransform: "none",
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
            bgcolor: 'divider' ,
            height: "45vh",
            width: "50%",
            borderRadius: 3,
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

      </Box>

      
    </Box>
  );
}
