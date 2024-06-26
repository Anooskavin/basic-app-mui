import { createTheme, Theme } from "@mui/material";
import React, { createContext, FC, PropsWithChildren, useContext } from "react";
import { useColorTheme } from "./Colortheme.ts";


type ThemeContextType = {
  mode: string;
  toggleColorMode: () => void;
  theme: Theme;
  toggleThemeColor: (index : number) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
  toggleThemeColor: () => {},

});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}
    > {children} </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};