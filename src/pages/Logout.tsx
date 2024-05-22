import React, { useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function Logout() {
  useEffect(() => {
    setTimeout(() => {
      localStorage.clear();
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
