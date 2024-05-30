import { useMemo, useState } from "react";
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  // createRow,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_TableOptions,
  useMaterialReactTable,
} from "material-react-table";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
// import {
//   QueryClient,
//   QueryClientProvider,
//   useMutation,
//   useQuery,
//   useQueryClient,
// } from "@tanstack/react-query";
// import {  fakeData, usStates } from "./makeData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

type User = {
  password: string;
  role: string;
  userid: number;
  username: string;
};

export default function TableData(props) {
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  function errorCheck(value) {
    if (
      validationErrors[value] === "" ||
      validationErrors[value] === undefined
    ) {
      return false;
    }
    return true;
  }

  function helperCheck(value) {
    if (validationErrors[value] === "") {
      return "";
    }
    return validationErrors[value];
  }

  function upsertUser(values, method) {
    console.log(values);
    fetch(
      method === "update"
        ? `http://localhost:3001/user/${values.userid}`
        : `http://localhost:3001/user/`,
      {
        method: method === "update" ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.cookies.get("access_token")}`,
        },
        body: JSON.stringify(values),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          setErrorMessage("");
          if (method === "update") setSuccessMessage("Update Successfully");
          else setSuccessMessage("Created Successfully");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          setErrorMessage(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Network Error");
      });
    return false;
  }

  function deleteUser(rowid) {
    console.log(rowid);
    fetch(`http://localhost:3001/user/${rowid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.cookies.get("access_token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          window.alert("Deleted Successfully");
        } else {
          window.alert(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        window.alert("Network Error");
      });
    return false;
  }

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "userid",
        header: "Id",
        enableEditing: false,
        size: 80,
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "username",
        header: "Username",
        muiEditTextFieldProps: {
          required: true,
          error: errorCheck("username"),
          helperText: helperCheck("username"),
          onFocus: () => {
            setValidationErrors({
              ...validationErrors,
              username: undefined,
            });
          },
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "role",
        header: "Roles",
        editVariant: "select",
        editSelectOptions: ["admin", "users"],
        muiEditTextFieldProps: {
          select: true,
          error: errorCheck("role"),
          helperText: helperCheck("role"),
        },

        muiTableBodyCellProps: {
          align: "center",
        },
      },
    ],
    [validationErrors]
  );

  const validateRequired = (value: string) => !!value.length;
  const validateUsername = (email: string) =>
    !!(email.length >= 3) && email.match(/^[a-zA-Z0-9]{3,}$/);

  function validateUser(user: User) {
    return {
      username: !validateRequired(user.username)
        ? "Username is Required"
        : !validateUsername(user.username)
        ? "Username must be at least 3 characters long and contain only alphanumeric characters"
        : "",
      role: !validateRequired(user.role) ? "Role is Required" : "",
    };
  }

  //UPDATE action
  const handleSaveUser: MRT_TableOptions<User>["onEditingRowSave"] = async ({
    values,
    table,
  }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    if (!upsertUser(values, "update")) {
      return;
    }

    setValidationErrors({});

    table.setEditingRow(null);
  };

  const handleCreateUser: MRT_TableOptions<User>["onCreatingRowSave"] = async ({
    values,
    table,
  }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    const data = {
      username: values.username,
      password: values.username + "@Y" + new Date().getFullYear().toString(),
      role: values.role,
    };
    if (!upsertUser(data, "create")) {
      return;
    }
    setValidationErrors({});

    table.setCreatingRow(null); //exit creating mode
  };

  const openDeleteConfirmModal = (row: MRT_Row<User>) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(row.original.userid);
    }
  };

  const table = useMaterialReactTable({
    columns,
    data: props.tableData,
    createDisplayMode: "modal", //default ('row', and 'custom' are also available)
    editDisplayMode: "modal",
    enableEditing: true,
    positionActionsColumn: "last",
    // muiToolbarAlertBannerProps: isLoadingUsersError
    //   ? {
    //       color: "error",
    //       children: "Error loading data",
    //     }
    //   : undefined,
    muiTableContainerProps: {
      sx: {
        minHeight: "200px",
        "& .Mui-TableHeadCell-Content": {
          justifyContent: "center",
        },
      },
    },
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateUser,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveUser,
    //optionally customize modal content
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Create New User</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        {errorMessage && (
          <Typography color="#FF0000" sx={{ textAlign: "center" }}>
            {errorMessage}
          </Typography>
        )}
        {successMessage && (
          <Typography color="#00B300" sx={{ textAlign: "center" }}>
            {successMessage}
          </Typography>
        )}
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    //optionally customize modal content
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Edit User</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        {errorMessage && (
          <Typography color="#FF0000" sx={{ textAlign: "center" }}>
            {errorMessage}
          </Typography>
        )}
        {successMessage && (
          <Typography color="#00B300" sx={{ textAlign: "center" }}>
            {successMessage}
          </Typography>
        )}
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={row.original.userid !== props.adminid ? "Delete" : "Current User can't delete his/her account"}>
          <IconButton
            color="error"
            onClick={() => {
              if (row.original.userid !== props.adminid)
                openDeleteConfirmModal(row);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        onClick={() => {
          table.setCreatingRow(true);
        }}
      >
        Create New User
      </Button>
    ),
  });

  return <MaterialReactTable table={table} />;
}
