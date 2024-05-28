import { Box, Paper ,Table,  TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";

export default  function DataTable(props) {

    return(
        <Box
        m={1}
        sx={{
          bgcolor: "divider",
          borderRadius: 3,
          marginTop: "20px",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontSize: 82, padding: 4, color: "textcolor" }}
        >
          Users Table
        </Typography>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
            mb: 3,
          }}
        >
          <TableContainer component={Paper}>
            <Table 
          //   sx={{ minWidth: 650 }} 
            aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">{props.tableHeader[0]}</TableCell>
                  <TableCell align="center">{props.tableHeader[1]}</TableCell>
                  <TableCell align="center">{props.tableHeader[2]}</TableCell>
                  <TableCell align="center">{props.tableHeader[3]}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.tableData.map((data, dataValue) => (
                  <TableRow
                    key={dataValue}
                    //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{data.userid}</TableCell>
                    <TableCell align="center">{data.username}</TableCell>
                    <TableCell align="center">{data.role}</TableCell>
                    <TableCell align="center">{dataValue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {props.tableErrorMessage && (
            <Typography color="#FF0000">{props.tableErrorMessage}</Typography>
          )}
        </Box>
      </Box>
    );
  
}
