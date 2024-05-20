import { amber, deepOrange, grey } from "@mui/material/colors";

const theme = {
  palette: {
    primary: amber,
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: amber,
          divider: '#f8f1f6',
          text: {
            primary: '#000000',
            secondary: grey[800],
            button: '#ffffff'
          },
          background:{
            default: "#fdfbff",
            navbar: '#f2ecee',
          },
          button: {
            background: '#9f86fd', 
          },
          navbar: {
            avatar :  "#dcdaf5",
            icon:  "#4d4156",
            search:  '#5f5168',
            name: "#4d4156"
          }
        }
      : {
          primary: deepOrange,
          divider: '#1c1b1d',
          background: {
            default: '#141314',
            paper: deepOrange[900],
            navbar: '#211F21',
          },
          text: {
            primary: "#e6e1e3",
            secondary: grey[500],
            button: '#000000'
          },
          button: {
            background: '#9f86fd',
          },
          navbar:{
            avatar: "#553f5d" ,
            icon: '#ffffff' ,
            search:  '#ffffff',
            name: "#dfddf8" ,
          }

        }),
  },
});

export default theme;