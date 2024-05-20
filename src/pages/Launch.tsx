import React from "react";
import NavBar from "../components/NavBar.tsx";
import {
  Box,
  Typography,
} from "@mui/material";
import { CardMedia } from "@mui/material";



export default function Launch() {

    


    
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <NavBar page={"Launch"}  />
      <div
        style={{
        backgroundColor: "background.default",
        color: "text.primary",
          width: "100%",
          height: "100vh",
          overflow: "auto",
        }}  
      >
     

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
      </div>
    </div>
  );
}
