import React from "react";
import { Box, Typography } from "@mui/material";

import Button from "@mui/material/Button";
// import { useThemeContext } from "../theme/ThemeContextProvider.tsx";

export default function Develop() {
//   const { toggleThemeColor } = useThemeContext();

  const colors: string[] = [
    "blue",
    "amber",
    "blueGrey",
    "brown",
    "cyan",
    "deepOrange",
    "deepPurple",
    "green",
    "grey",
    "indigo",
    "lightBlue",
    "lightGreen",
    "lime",
    "orange",
    "pink",
    "purple",
    "red",
    "teal",
    "yellow",
  ];

  const colorsWithChunk = (colors: string[]): string[][] => {
    const results: string[][] = [];
    for (let i = 0; i < colors.length; i += 4) {
      results.push(colors.slice(i, i + 4));
    }
    return results;
  }

  const colorsArray = colorsWithChunk(colors);


  return (
    <Box>
      {/* <NavBar name={"Launch"}  /> */}
      <Box
        style={{
          backgroundColor: "background.default",
          color: "text.primary",
          width: "100%",
          height: "100vh",
          paddingLeft: "6%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: 72,
            paddingTop: 8,
            paddingLeft: 20,
            color: "textcolor",
          }}
        >
          {" "}
          Develop{" "}
        </Typography>

        <Box style={{ paddingTop: "8%", paddingLeft: "50%" }}>
          <Box
            sx={{
              bgcolor: "divider",
              borderRadius: 2,
              padding: 4,
              width: "84vh",
            }}
          >
        {colorsArray.map((colorArray, colorIndex)=> (
            <Box key={colorIndex} style={{ display: "flex", gap: "4%", marginTop: 10 }}>
            {colorArray.map((color, index) => (
              
                <Button
                key={colorIndex+""+index}
                  onClick={() => {
                    // console.log(colorIndex+index+((colorIndex*3)+1)-1);
                    // toggleThemeColor(colorIndex+index+((colorIndex*3)+1)-1);
                  }}
                  variant="contained"
                  sx={{ bgcolor: color, width: '50%' }}
                >
                  {color}
                </Button>
              
            ))}

            </Box>
                
            ))}
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
