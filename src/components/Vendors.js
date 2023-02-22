import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import VendorListItem from "./VendorList";
import { useGetAllVendorsData } from "../hooks/useGetAllVendorsData";

export default function Vendors() {
  const onSuccess = (data) => {
    console.log("Perform side effect after fetching the data");
    console.log(data?.data.length);
    if (data?.data.length > 0) {
      setVendors(data?.data);
      if (vendors.length > 0) {
        setVendor(vendors[0]);
        setselectedVendorId(vendors[0].vendorId);
      }
    }
  };

  const onError = (error) => {
    console.log("Perform side effect after failing to fetching the data");
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useGetAllVendorsData(onSuccess, onError);
  //isFetchhing and refetch callback handlers can be used to bind loading of queries to click events

  const [vendors, setVendors] = useState([]);
  const [vendor, setVendor] = useState(vendors[0]);
  const [selectedVendorId, setselectedVendorId] = useState(
    vendors[0]?.vendorId
  );

  useEffect(() => {
    if (data?.data.length > 0) {
      setVendors(data?.data);
      if (vendors.length > 0) {
        setVendor(vendors[0]);
        setselectedVendorId(vendors[0].vendorId);
      }
    }
  }, [vendors]);

  useEffect(() => {
    const selectedVendor = vendors.filter(
      (v) => v.vendorId === selectedVendorId
    )[0];
    console.log("vendor changed ");
    setVendor(selectedVendor);
  }, [selectedVendorId]);

  const onValueChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    //add other logic to update the DB here
  };

  if (isError) {
    return <h2>{error.message}</h2>;
  }

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
            <Grid item xs={4} sx={{ border: 0, p: 2 }}>
              <List>
                {vendors.map((v) => (
                  <VendorListItem
                    selectedVendor={setselectedVendorId}
                    vendorName={v.name}
                    vendorId={v.vendorId}
                  />
                ))}
              </List>
            </Grid>
            <Grid item xs={8} sx={{ border: 0, p: 2 }}>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  sx={{ margin: 2 }}
                  id="vendorname"
                  label="Name"
                  name="vendorname"
                  variant="outlined"
                  value={vendor && vendor.name}
                  InputLabelProps={{ shrink: vendor && true }}
                  onChange={(e) => onValueChange(e)}
                />
                <FormControl sx={{ m: 2, minWidth: 250 }}>
                  <InputLabel id="budgetCategoryItemIdlabel">
                    Budget Category Item
                  </InputLabel>
                  <Select
                    labelId="budgetCategoryItemIdlabel"
                    id="budgetCategoryItemId"
                    label="Budget Category Item"
                    name="budgetCategoryItemId"
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
                <TextField
                  sx={{ margin: 2 }}
                  id="phone"
                  label="Hot Line"
                  variant="outlined"
                  name="phone"
                  value={vendor && vendor.phone}
                  InputLabelProps={{ shrink: vendor && true }}
                  onChange={(e) => onValueChange(e)}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="email"
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={vendor && vendor.email}
                  InputLabelProps={{ shrink: vendor && true }}
                  onChange={(e) => onValueChange(e)}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="contactName"
                  label="Contact Person Name"
                  variant="outlined"
                  name="contactName"
                  value={vendor && vendor.contactName}
                  InputLabelProps={{ shrink: vendor && true }}
                  onChange={(e) => onValueChange(e)}
                />
                {/* <TextField
                  sx={{ margin: 2 }}
                  id="designation"
                  label="Contact Designation"
                  variant="outlined"
                  name="designation"
                  value={vendor && vendor.designation}
                  InputLabelProps={{ shrink: vendor && true }}
                  onChange={(e) => onValueChange(e)}
                /> */}
                <TextField
                  sx={{ margin: 2 }}
                  id="totalCost"
                  label="Total Cost"
                  variant="outlined"
                  name="totalCost"
                  value={vendor && vendor.totalCost}
                  InputLabelProps={{ shrink: vendor && true }}
                  onChange={(e) => onValueChange(e)}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="balancePayment"
                  InputProps={{
                    readOnly: true,
                  }}
                  label="balancePayment Remaining"
                  variant="outlined"
                  name="balancePayment"
                  value={vendor && vendor.balancePayment}
                  InputLabelProps={{ shrink: vendor && true }}
                  onChange={(e) => onValueChange(e)}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="payedAmount"
                  InputProps={{
                    readOnly: true,
                  }}
                  label="Paid Total"
                  variant="outlined"
                  name="payedAmount"
                  value={vendor && vendor.payedAmount}
                  InputLabelProps={{ shrink: vendor && true }}
                  onChange={(e) => onValueChange(e)}
                />
                <FormGroup sx={{ margin: 2 }}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked id="S" name="S" />}
                    label="Vender Selected"
                  />
                </FormGroup>
                <Stack direction="row" spacing={2} sx={{ margin: 2 }}>
                  <Button variant="outlined" type="submit">
                    Save
                  </Button>
                  <Button variant="outlined">Delete</Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
}
