import React from "react";
import FoundationRoundedIcon from "@mui/icons-material/FoundationRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import BookRoundedIcon from "@mui/icons-material/BookRounded";

export const NavBarMenuItems = [
  {
    name: "Home",
    icon: <FoundationRoundedIcon sx={{ color: "navbar.search" }} />,
    url: "/",
  },
  {
    name: "Launch",
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
