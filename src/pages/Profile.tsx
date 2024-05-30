import { Padding } from "@mui/icons-material";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth.tsx";
import { jwtDecode } from "jwt-decode";
import DataTable from "../components/DataTable.tsx";
import TableData from "../components/TableData.tsx";

// material react table

type DecodeType = {
  userid: number;
  role: string;
};

type User = {
  password: string;
  role: string;
  userid: number;
  username: string;
};

type UserTable = User[];

export default function Profile() {
  const { cookies } = useAuth();

  const [username, setUsername] = useState<String>("");
  const [role, setRole] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [errorMessage, setErrorMessage] = useState<String>("");
  const [successMessage, setSuccessMessage] = useState<String>("");
  const [nameError, setNameError] = useState<String>("");

  const [tableData, setTableData] = useState<UserTable>([]);
  const [tableErrorMessage, setTableErrorMessage] = useState<String>("");

  const tableHeader = ["User ID", "Username", "Role", "Edit"];

  const decoded: DecodeType = jwtDecode(cookies.get("access_token"));

  useEffect(() => {
    fetch(`http://localhost:3001/user/${decoded.userid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("access_token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setErrorMessage("");
        setUsername(data.username);
        setRole(data.role);
        setPassword(data.password);
      })
      .catch((error) => {
        setErrorMessage("Network Error");
      });

    if (decoded.role === "admin") {
      fetch(`http://localhost:3001/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.get("access_token")}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setTableErrorMessage("");
          setTableData(data);
          // setUsername(data.username);
          // setRole(data.role);
          // setPassword(data.password);
        })
        .catch((error) => {
          setTableErrorMessage("Network Error");
        });
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if (event.target.validity.valid) {
      setNameError("");
    } else {
      setNameError(
        "Username must be at least 3 characters long and contain only alphanumeric characters."
      );
    }
  };

  async function submitForm(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log(data.get('username'), data.get('password'), data.get('role'))

    const formData = {
      username: data.get("username"),
      password: data.get("password"),
      role: data.get("role"),
    };

    //   console.log(formData)

    fetch(`http://localhost:3001/user/${decoded.userid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("access_token")}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          setErrorMessage("");
          setSuccessMessage("Update Successfully");

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          setNameError(data.message);
        }
      })
      .catch((error) => {
        setErrorMessage("Network Error");
      });
  }

  return (
    <Box
      style={{
        backgroundColor: "background.default",
        width: "100%",
        height: "100vh",
        color: "text.primary",
        paddingLeft: "6%",
      }}
    >
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
          Profile
        </Typography>
        <Box
          component="form"
          onSubmit={submitForm}
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
            mb: 3,
          }}
        >
          <TextField
            label="Username"
            sx={{ width: "50%" }}
            value={username}
            onChange={handleUsernameChange}
            name="username"
            required
            error={nameError !== ""}
            helperText={nameError}
            inputProps={{
              pattern: "[a-zA-Z0-9]{3,}",
            }}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            sx={{ width: "50%" }}
            value={password}
          />
          <TextField
            label="Role"
            sx={{ width: "50%" }}
            value={role}
            name="role"
          />

          {errorMessage && (
            <Typography color="#FF0000">{errorMessage}</Typography>
          )}

          {successMessage && (
            <Typography color="#00B300">{successMessage}</Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{
              borderRadius: 7,
              bgcolor: "button.background",
              color: "text.button",
              bottom: 12,
            }}
            disabled={errorMessage !== ""}
          >
            {" "}
            <span
              style={{
                textTransform: "none",
                fontSize: 20,
                //     padding: 9,
              }}
            >
              Update
            </span>
          </Button>
        </Box>
      </Box>

      {decoded.role === "admin" && (
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
              //   alignItems: "center",
              mb: 3,
            }}
          >
            <TableData
              tableHeader={tableHeader}
              tableData={tableData}
              tableErrorMessage={tableErrorMessage}
              cookies={cookies}
              adminid={decoded.userid}
            />

            {/* <DataTable
                     tableHeader={tableHeader}
                      tableData={tableData}
                      tableErrorMessage={tableErrorMessage}
                    /> */}
          </Box>
        </Box>
      )}

      {decoded.role === "admin" && <></>}
    </Box>
  );
}
