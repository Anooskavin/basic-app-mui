import { createTheme } from "@mui/material";
import React from "react";
import  { getDesignTokens } from "./theme.tsx";

export const useColorTheme = () => {
  const [mode, setMode] = React.useState(localStorage.getItem('theme') || "light");
  const [color, setColor] = React.useState(0);

  const toggleColorMode = () =>{
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
    localStorage.setItem('theme',mode === "light" ? "dark" : "light")
  };

  const toggleThemeColor = (index : number) =>{
    setColor(index)
  };

  
 
  const modifiedTheme = React.useMemo(
    () => createTheme(getDesignTokens(mode, color)),
    [mode,color]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
    toggleThemeColor
  };
};