import React, { useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import useAuth from "../hooks/useAuth.tsx";

export default function Logout() {
    const {cookies, setIsAuthenticated} = useAuth()
  useEffect(() => {
    setTimeout(() => {
    //   localStorage.clear();
      cookies.remove('access_token')
      setIsAuthenticated('')
      window.location.replace("/");
    });
  }, );
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress sx={{color:""}} />
    </Box>
  );
}
