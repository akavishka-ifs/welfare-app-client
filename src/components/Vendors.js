import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
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
            <Grid item xs={4} sx={{ border: 0, p: 2 }}>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="DS Gunasekara Co LTD" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="FAB" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Ariyapala Wine Stores" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Island Water Sports" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Shangrilla Hambantota" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={8} sx={{ border: 0, p: 2 }}>
              <Box component="form">
                <TextField
                  sx={{ margin: 2 }}
                  id="vendorname"
                  label="Name"
                  variant="outlined"
                />
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
                <TextField
                  sx={{ margin: 2 }}
                  id="contactnumber"
                  label="Hot Line"
                  variant="outlined"
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="email"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="contactpersonname"
                  label="Contact Person Name"
                  variant="outlined"
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="contactname"
                  label="Contact Name"
                  variant="outlined"
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="totalcost"
                  label="Total Cost"
                  variant="outlined"
                />
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
                  id="paidtotal"
                  InputProps={{
                    readOnly: true,
                  }}
                  label="Paid Total"
                  variant="outlined"
                />
                <FormGroup sx={{ margin: 2 }}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked id="vendorselected" />}
                    label="Vender Selected"
                  />
                </FormGroup>
                <Stack direction="row" spacing={2} sx={{ margin: 2 }}>
                  <Button variant="outlined">Save</Button>
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
