import { createTheme, Theme } from "@mui/material";
import React, { createContext, FC, PropsWithChildren, useContext } from "react";
import { useColorTheme } from "./Colortheme";


export const ThemeContext = createContext({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
});

export const ThemeContextProvider = ({ children }) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};