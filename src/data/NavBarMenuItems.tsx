import React from "react";
import FoundationRoundedIcon from "@mui/icons-material/FoundationRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import BookRoundedIcon from "@mui/icons-material/BookRounded";

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
    name: "Logout",
    iconDark: <BookRoundedIcon 
    sx={{ color:  "white"  }} 
    />,
    iconLight: <BookRoundedIcon 
    sx={{ color: "black"  }} 
    />,
    url: "/logout",
  },
];
