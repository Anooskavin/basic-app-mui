import { createTheme } from "@mui/material";
import React from "react";
import theme, { getDesignTokens } from "./theme.tsx";

export const useColorTheme = () => {
  const [mode, setMode] = React.useState(localStorage.getItem('theme') || "light");

  const toggleColorMode = () =>{
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
    localStorage.setItem('theme',mode === "light" ? "dark" : "light")
  };

    
 
  console.log(mode)
  const modifiedTheme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};