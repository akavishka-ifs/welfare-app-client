import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "TransactionId", width: 100 },
  {
    field: "vendorname",
    headerName: "Vendor Name",
    width: 150,
    editable: false,
  },
  {
    field: "expensename",
    headerName: "Expense Name",
    width: 150,
    editable: false,
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 100,
    editable: false,
  },
  {
    field: "paymentdate",
    headerName: "Payment Date",
    type: "date",
    width: 100,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    vendorname: "DS Gunasekara Co LTD",
    expensename: "Bus",
    amount: 35000,
    paymentdate: "2022-09-26",
  },
  {
    id: 2,
    vendorname: "Shangrilla Hambantota",
    expensename: "Room Reservation",
    amount: 10000,
    paymentdate: "2022-10-02",
  },
  {
    id: 3,
    vendorname: "Shangrilla Hambantota",
    expensename: "Room Reservation",
    amount: 45000,
    paymentdate: "2022-09-15",
  },
  {
    id: 4,
    vendorname: "FAB",
    expensename: "Breakfast",
    amount: 16000,
    paymentdate: "2022-09-20",
  },
  {
    id: 5,
    vendorname: "Ariyapala Wine Stores",
    expensename: "Liquor",
    amount: 33000,
    paymentdate: "2022-09-06",
  },
  {
    id: 6,
    vendorname: "FAB",
    expensename: "Coffee",
    amount: 1500,
    paymentdate: "2022-09-16",
  },
  {
    id: 7,
    vendorname: "Island Water Sports",
    expensename: "Jetskis",
    amount: 4400,
    paymentdate: "2022-09-26",
  },
  {
    id: 8,
    vendorname: "Island Water Sports",
    expensename: "Surf Boards",
    amount: 3680,
    paymentdate: "2022-10-06",
  },
  {
    id: 9,
    vendorname: "Shangrilla Hambantota",
    expensename: "Room Reservation",
    amount: 65000,
    paymentdate: "2022-09-06",
  },
];

export default function Vendors() {
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
                <Button variant="outlined">+Add</Button>
              </Stack>
            </Grid>
            <Grid item xs={12} sx={{ border: 0, p: 2 }}>
              <Box component="form">
                <FormControl sx={{ m: 2, minWidth: 250 }}>
                  <InputLabel id="budgetcategoryitemselectlabel">
                    Budget Category Item
                  </InputLabel>
                  <Select
                    labelId="budgetcategoryitemselectlabel"
                    id="budgetcategoryitemselect"
                    label="Budget Category Item"
                  >
                    <MenuItem value={"Bus"}>Bus</MenuItem>
                    <MenuItem value={"Snacks for the Bus"}>
                      Snacks for the Bus
                    </MenuItem>
                    <MenuItem value={"Snacks for outdoor games"}>
                      Snacks for outdoor games
                    </MenuItem>
                    <MenuItem value={"Toll booth Charges"}>
                      Toll booth Charges
                    </MenuItem>
                    <MenuItem value={"Medicine for Emergencies"}>
                      Medicine for Emergencies
                    </MenuItem>
                    <MenuItem value={"Snorkling Package"}>
                      Snorkling Package
                    </MenuItem>
                    <MenuItem value={"Room Reservation"}>
                      Room Reservation
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 2, minWidth: 250 }}>
                  <InputLabel id="vendorselectlabel">Vendor</InputLabel>
                  <Select
                    labelId="vendorselectlabel"
                    id="vendorselect"
                    label="Vendor"
                  >
                    <MenuItem value={"DS Gunasekara Co LTD"}>
                      DS Gunasekara Co LTD
                    </MenuItem>
                    <MenuItem value={"Ariyapala Wine Stores"}>
                      Ariyapala Wine Stores
                    </MenuItem>
                    <MenuItem value={"FAB"}>FAB</MenuItem>
                    <MenuItem value={"Island Water Sports"}>
                      Island Water Sports
                    </MenuItem>
                    <MenuItem value={"Shangrilla Hambantota"}>
                      Shangrilla Hambantota
                    </MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  sx={{ margin: 2 }}
                  id="balance"
                  InputProps={{
                    readOnly: true,
                  }}
                  label="Balance Remaining"
                  variant="outlined"
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="amount"
                  InputProps={{
                    readOnly: false,
                  }}
                  label="Payment Amount"
                  variant="outlined"
                />
                <TextField
                  id="fromdate"
                  label="From Date"
                  type="date"
                  defaultValue="2022-10-06"
                  sx={{ margin: 2, width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="todate"
                  label="To Date"
                  type="date"
                  defaultValue="2022-10-06"
                  sx={{ margin: 2, width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
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
                <Stack direction="row" spacing={2} sx={{ margin: 2 }}>
                  <Button variant="outlined">Print</Button>
                  <Button variant="outlined">Filter</Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
}
