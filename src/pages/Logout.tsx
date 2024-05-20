import React, { useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";

export default function Logout() {
  useEffect(() => {
    setTimeout(() => {
      localStorage.clear();
      window.location.replace("/");
    }, 1000);
  }, );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress sx={{color:"background"}} />
    </div>
  );
}
