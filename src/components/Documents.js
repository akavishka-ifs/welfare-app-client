import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Documents() {
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
                    <ListItemText primary="DS Gunasekara Advance Reciept" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="FAB Payment" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Ariyapala Wine Stores Payment" />
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
                  <InputLabel id="vendorselect">Vendor</InputLabel>
                  <Select labelId="vendorselect" id="vendorId" label="Vendor">
                    <MenuItem value={"DS Gunasekara Co LTD"}>
                      DS Gunasekara Co LTD
                    </MenuItem>
                    <MenuItem value={"FAB"}>FAB</MenuItem>
                    <MenuItem value={"Ariyapala Wine Stores"}>
                      Ariyapala Wine Stores
                    </MenuItem>
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
                  id="addeddate"
                  InputProps={{
                    readOnly: true,
                  }}
                  label="Upload Date"
                  variant="outlined"
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="path"
                  InputProps={{
                    readOnly: true,
                  }}
                  label="Document Path"
                  variant="outlined"
                />
                <Stack direction="row" spacing={2} sx={{ margin: 2 }}>
                  <Button variant="outlined" component="label">
                    Upload File
                    <input type="file" hidden />
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
