import React from "react";
import FoundationRoundedIcon from "@mui/icons-material/FoundationRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

export const NavBarMenuItems = [
  {
    name: "Home",
    iconDark: <FoundationRoundedIcon 
    sx={{ color: "white"  }}
     />,
    iconLight: <FoundationRoundedIcon 
     sx={{ color: "black"  }}
      />,
    url: "/",
  },
  {
    name: "Launch",
    iconDark: <AppsOutlinedIcon 
    sx={{ color:  "white"   }} 
    />,
    iconLight: <AppsOutlinedIcon 
    sx={{ color: "black"   }} 
    />,
    url: "/launch",
  },
  {
    name: "Develop",
    iconDark: <CodeOutlinedIcon 
    sx={{ color:  "white"  }} 
    />,
    iconLight: <CodeOutlinedIcon 
    sx={{ color: "black"  }} 
    />,
    url: "/develop",
  },
  {
    name: "Profile",
    iconDark: <PersonOutlineRoundedIcon 
    sx={{ color:  "white"  }} 
    />,
    iconLight: <PersonOutlineRoundedIcon 
    sx={{ color: "black"  }} 
    />,
    url: "/profile",
  },
  {
    name: "Logout",
    iconDark: <LogoutRoundedIcon 
    sx={{ color:  "white"  }} 
    />,
    iconLight: <LogoutRoundedIcon 
    sx={{ color: "black"  }} 
    />,
    url: "/logout",
  },
];
