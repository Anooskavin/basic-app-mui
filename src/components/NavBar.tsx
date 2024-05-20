import React, { useState } from "react";
import {
  Avatar,
  Grid,
  Box,
  Typography
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FoundationRoundedIcon from "@mui/icons-material/FoundationRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import NightlightRoundRoundedIcon from "@mui/icons-material/NightlightRoundRounded";
import { Link } from "react-router-dom";
import { useThemeContext } from "../theme/ThemeContextProvider.tsx";
import { NavBarMenuItems } from "../data/NavBarMenuItems.tsx";


export default function NavBar(props) {
  const [searchHovered, setSearchHovered] = useState<Boolean>(false);
  const [themeHovered, setThemeHovered] = useState<Boolean>(false);

  const [theme, setTheme] = useState<any>(localStorage.getItem("theme"));

  const [hoveredIndex, setHoveredIndex] = useState<any>(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };



  const navBarMenus = [
    {
      name: "Home",
      icon: <FoundationRoundedIcon sx={{ color: "navbar.search" }} />,
      url: "/",
    },
    {
      name: "Get Started",
      icon: <AppsOutlinedIcon sx={{ color: "navbar.search" }} />,
      url: "/launch",
    },
    {
      name: "Develop",
      icon: <CodeOutlinedIcon sx={{ color: "navbar.search" }} />,
      url: "/",
    },
    {
      name: "Logout",
      icon: <BookRoundedIcon sx={{ color: "navbar.search" }} />,
      url: "/logout",
    },
  ];

  // navbarMenus should be 

  
  const { mode, toggleColorMode } = useThemeContext();

  function logout(name) {
    if (name === "Logout") {
      localStorage.clear();
      window.location.replace("/");
    }
  }

  return (
    <div>
      
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
                bgcolor: "navbar.avatar",
                width: 60,
                height: 60,
                borderRadius: 3,
                mb: 3,
                mt: 3,
              }}
              onMouseEnter={() => setSearchHovered(true)}
              onMouseLeave={() => setSearchHovered(false)}
            >
              <SearchIcon sx={{ color: "navbar.search" }} />
            </Avatar>
          </Grid>

          {NavBarMenuItems.map((menu, index) => (
            <Grid item xs={6} sm={12} key={index}>
              <Avatar
                sx={{
                  ml: 0.5,
                  bgcolor:
                    menu.name === props.page
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
              >
                <Link
                  to={menu.url}>
                  {menu.icon}
                </Link>
              </Avatar>
              <Typography variant="subtitle2" color={"navbar.name"} mb={2}>
                {menu.name}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Grid item xs={6} sm={12} mb={2}>
          <div onClick={toggleColorMode}>
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
              {mode === "dark" ? (
                themeHovered ? (
                  <WbSunnyRoundedIcon style={{ fill: "white" }} />
                ) : (
                  <WbSunnyOutlinedIcon style={{ fill: "white" }} />
                )
              ) : (
                <></>
              )}

              {mode === "light" ? (
                themeHovered ? (
                  <NightlightRoundRoundedIcon />
                ) : (
                  <NightlightRoundRoundedIcon style={{ fill: "black" }} />
                )
              ) : (
                <></>
              )}
            </Avatar>
          </div>
        </Grid>
      </Box>
    </div>
  );
}
