// import {   blue ,amber, blueGrey, brown, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow  } from "@mui/material/colors";


// const colors = [  blue, amber,blueGrey, brown, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow ]


const theme = {
  palette: {
        mode : 'light',
  },
};

console.log("hello-color");


export const getDesignTokens = (mode, color) => ({
  palette: {
    mode,
    // ...(mode === "light"
    //   ? {
    //     primary: colors[color],
    //     secondary: grey,
    //       divider: colors[color][100],
    //       textcolor: colors[color][900],
    //       background:{
    //         default: colors[color][50],
    //         navbar: colors[color][100],
    //       },
    //       button: {
    //         background: colors[color][400], 
    //       },
    //       navbar: {
    //         avatar :  grey[300],
    //         search:  colors[color][900],
    //         name: colors[color][900]
    //       }
    //     }
    //   : {
    //     primary: colors[color],
    //     secondary: grey,
    //       divider: colors[color][800],
    //       background: {
    //         default: colors[color][900],
    //         navbar: colors[color][800],
    //       },
    //       textcolor: grey,
    //       button: {
    //         background: grey[700],
    //       },
    //       navbar:{
    //         avatar: grey[700] ,
    //         search:  colors[color][50],
    //         name: grey[50] ,
    //       }

    //     }),
  },
});

export default theme;