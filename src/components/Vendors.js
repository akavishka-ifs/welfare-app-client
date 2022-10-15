import React, { useState } from "react";
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
import VendorList from "./VendorList";

export default function Vendors() {
  const [vendor, setVendor] = useState();
  const [selectedVendor, setselectedVendor] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const vendor = {
      vendorname: data.get("vendorname"),
      budgetcategoryitemselect: data.get("budgetcategoryitemselect"),
      contactnumber: data.get("contactnumber"),
      email: data.get("email"),
      contactpersonname: data.get("contactpersonname"),
      designation: data.get("designation"),
      totalcost: data.get("totalcost"),
      balance: data.get("balance"),
      paidtotal: data.get("paidtotal"),
      vendorselected: data.get("vendorselected"),
    };

    setVendor(vendor);
    //add other logic to update the DB here
  };

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
            Vendor Selected {vendor&&vendor.vendorname}
            <Grid item xs={12} sx={{ border: 0, p: 0 }}>
              <Stack direction="row" spacing={2} sx={{ margin: 0 }}>
                <Button variant="outlined">+Add</Button>
              </Stack>
            </Grid>
            <Grid item xs={4} sx={{ border: 0, p: 2 }}>
              <List>
                <VendorList setVendor={setVendor}/>
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
                  value={vendor&&vendor.vendorname}
                  InputLabelProps={{shrink: vendor&&true}}

                />
                <FormControl sx={{ m: 2, minWidth: 250 }}>
                  <InputLabel id="budgetcategoryitemselectlabel">
                    Budget Category Item
                  </InputLabel>
                  <Select
                    labelId="budgetcategoryitemselectlabel"
                    id="budgetcategoryitemselect"
                    label="Budget Category Item"
                    name="budgetcategoryitemselect"
                    value={vendor&&vendor.budgetcategoryitemselect}
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
                  id="contactnumber"
                  label="Hot Line"
                  variant="outlined"
                  name="contactnumber"
                  value={vendor&&vendor.contactnumber}
                  InputLabelProps={{shrink: vendor&&true}}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="email"
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={vendor&&vendor.email}
                  InputLabelProps={{shrink: vendor&&true}}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="contactpersonname"
                  label="Contact Person Name"
                  variant="outlined"
                  name="contactpersonname"
                  value={vendor&&vendor.contactpersonname}
                  InputLabelProps={{shrink: vendor&&true}}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="designation"
                  label="Contact Designation"
                  variant="outlined"
                  name="designation"
                  value={vendor&&vendor.designation}
                  InputLabelProps={{shrink: vendor&&true}}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="totalcost"
                  label="Total Cost"
                  variant="outlined"
                  name="totalcost"
                  value={vendor&&vendor.totalcost}
                  InputLabelProps={{shrink: vendor&&true}}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="balance"
                  InputProps={{
                    readOnly: true,
                  }}
                  label="Balance Remaining"
                  variant="outlined"
                  name="balance"
                  value={vendor&&vendor.balance}
                  InputLabelProps={{shrink: vendor&&true}}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="paidtotal"
                  InputProps={{
                    readOnly: true,
                  }}
                  label="Paid Total"
                  variant="outlined"
                  name="paidtotal"
                  value={vendor&&vendor.paidtotal}
                  InputLabelProps={{shrink: vendor&&true}}
                />
                <FormGroup sx={{ margin: 2 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        id="vendorselected"
                        name="vendorselected"
                        value={vendor&&vendor.vendorselected}
                        InputLabelProps={{shrink: vendor&&true}}
                      />
                    }
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
