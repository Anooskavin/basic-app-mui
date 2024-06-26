import React, { useState } from "react";
import {
  Avatar,
  Grid,
  Box,
  Typography,
  Paper
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import NightlightRoundRoundedIcon from "@mui/icons-material/NightlightRoundRounded";
import { Link } from "react-router-dom";
import { useThemeContext } from "../theme/ThemeContextProvider.tsx";
import { NavBarMenuItems } from "../data/NavBarMenuItems.tsx";


export default function NavBar() {
 
   // props.page
  // navbar static
  // how many times authorized 2
  // add buttons check themes
  // change in pallette


  const [searchHovered, setSearchHovered] = useState<Boolean>(false);
  const [themeHovered, setThemeHovered] = useState<Boolean>(false);


  const [hoveredIndex, setHoveredIndex] = useState<any>(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };






  
  const { mode, toggleColorMode } = useThemeContext();

  

  return (
    <Paper style={{position: 'fixed'}} elevation={24}>
      
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          bgcolor: "background.navbar",
          height: "100vh",
          width: "10vh",
        }}
      >
        <Grid>
          <Grid item xs={6} sm={12}>
            <Avatar
              sx={{
                ml: 0.5,
                bgcolor:  "navbar.avatar",
                width: 60,
                height: 60,
                borderRadius: 3,
                mb: 3,
                mt: 3,
                opacity: searchHovered ? 1 : 0.9,
              }}
              onMouseEnter={() => setSearchHovered(true)}
              onMouseLeave={() => setSearchHovered(false)}
              data-testid={'search-icon'}
            >
              <SearchIcon sx={{ 
                color: "navbar.search"  
                }} />
            </Avatar>
          </Grid>

          {NavBarMenuItems.map((menu, index) => (
            <Grid item xs={6} sm={12} key={index}>
              <Avatar
                sx={{
                  ml: 0.5,
                  bgcolor:
                    menu.name.toLowerCase() === window.location.pathname.split('/')[1] || (window.location.pathname.split('/')[1] === '' &&  menu.name.toLowerCase() ==='home')   
                      ? "navbar.avatar"
                      : hoveredIndex === index
                      ? "navbar.avatar"
                      : "transparent",
                  width: 60,
                  borderRadius: 5,
                  opacity: hoveredIndex === index ? 0.8 : 1,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                data-testid= {"icon-hover-"+menu.name}
              >
                <Link
                  to={menu.url}>
                   
                  {mode === "light" ? menu.iconLight : menu.iconDark}
               
                </Link>
              </Avatar>
              <Typography variant="subtitle2" 
              color={"navbar.name"}
               mb={2}>
                {menu.name}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Grid item xs={6} sm={12} mb={2}>
          <Box onClick={toggleColorMode}>
            <Avatar
              sx={{
                ml: 1,
                bgcolor: themeHovered ? "navbar.avatar" : "transparent",
                width: 50,
                height: 50,
                borderRadius: "50%",
                border: "2px solid #6a686c",
              }}
              onMouseEnter={() => setThemeHovered(true)}
              onMouseLeave={() => setThemeHovered(false)}
              data-testid={'theme-avatar'}
            >
              {mode === "dark" ? (
                themeHovered ? (
                  <WbSunnyRoundedIcon style={{ fill: "white" }} data-testid={'theme-hover-dark-icon'} />
                ) : (
                  <WbSunnyOutlinedIcon style={{ fill: "white" }} data-testid={'theme-dark-icon'} />
                )
              ) : (
                <></>
              )}

              {mode === "light" ? (
                themeHovered ? (
                  <NightlightRoundRoundedIcon  style={{ fill: "white" }} data-testid={'theme-hover-light-icon'}/>
                ) : (
                  <NightlightRoundRoundedIcon style={{ fill: "black" }} data-testid={'theme-light-icon'} />
                )
              ) : (
                <></>
              )}
            </Avatar>
          </Box>
        </Grid>
      </Box>
    </Paper>
  );
}
