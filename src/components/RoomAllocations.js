import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import FormHelperText from '@mui/material/FormHelperText';
//import { useGetAllRoomTypes, useAddRoomType, useUpdateRoomType, useDeleteRoomType } from "../hooks/useRoomTypeData";
import { Delete } from "@mui/icons-material";


export default function RoomAllocations() {
  const columns = [
    {
      field: "roomNumber",
      headerName: "Room Number",
      width: 150,
      editable: false,
    },
    {
      field: "typeID",
      headerName: "Room Type",
      width: 150,
      editable: false,
    },
    {
      field: "empIDs",
      headerName: "Members",
      width: 350,
      editable: false,
    },
    {
      field: "remarks",
      headerName: "Remarks",
      width: 200,
      editable: false,
    },
  ];

  const rows = [
    {
      id: 1,
      roomNumber: "1001",
      typeID: "Triple",
      empIDs: "Hasala, Maheshika, Jeewanthi",
      remarks: "G-T-1",
    },
    {
      id: 2,
      roomNumber: "1002",
      typeID: "Triple",
      empIDs: "Hansagee, Vimansa, Shano",
      remarks: "G-T-2",
    },
    {
      id: 3,
      roomNumber: "1003",
      typeID: "Quadruple",
      empIDs: "Charitha, Janith, Tyronne, Sanjeewa",
      remarks: "B-Q-2",
    },
    {
      id: 4,
      roomNumber: "1004",
      typeID: "Quadruple",
      empIDs: "Danuka P, Chrishane, Gayan W, Sandun",
      remarks: "B-Q-2",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 1000,
          marginBottom: 3,
        },
      }}
    >
      <Grid item xs={16}>
        <Paper
          sx={{ p: 2, display: "flex", flexDirection: "column" }}
          elevation={5}
        >
          <Grid container spacing={2} sx={{ p: 2 }} columns={12}>
            <Grid item xs={12} sx={{ border: 0, p: 0 }}>
              <Stack direction="row" spacing={2} sx={{ margin: 0 }}>
                <Button variant="outlined">Generate</Button>
                <Button variant="outlined">Print</Button>
              </Stack>
            </Grid>
            <Grid item xs={12} sx={{ border: 0, p: 2 }}>
              <Box component="form">
                <Box sx={{ height: 400, width: "100%" }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );

}


