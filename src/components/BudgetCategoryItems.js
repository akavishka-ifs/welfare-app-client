import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BudgetCategoryItems() {
  return (
    <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 1000,
            marginBottom : 3
          },
        }}
      >
        <Grid item xs={16}>
          <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column" }}
            elevation={5}
          >
            <Typography
              variant="h5"
              gutterBottom
              align="center"
              component="div"
              color="text.secondary"
            >
              Budget Category Items
            </Typography>
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
                      <ListItemText primary="Bus" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Snacks for the Bus" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Snacks for outdoor games" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Toll booth Charges" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Medicine for Emergencies" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Snorkling Package" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Room Reservation" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={8} sx={{ border: 0, p: 2 }}>
                <Box component="form">
                  <TextField 
                    sx={{ margin: 2}}
                    id="categoryitemname"
                    label="ItemName"
                    variant="outlined"
                  />
                  <FormControl sx={{ m: 2, minWidth: 250 }}>
                  <InputLabel id="budgetcategoryselectlabel">
                    Budget Category
                  </InputLabel>
                  <Select
                    labelId="budgetcategoryselectlabel"
                    id="budgetcategoryselect"
                    label="Budget Category Item"
                  >
                    <MenuItem value={"Transportation"}>Transportation</MenuItem>
                    <MenuItem value={"Food & Beverages"}>Food & Beverages</MenuItem>
                    <MenuItem value={"Alchohol & Bites"}>Alchohol & Bites</MenuItem>
                    <MenuItem value={"Tips"}>Tips</MenuItem>
                    <MenuItem value={"Accomodation"}>Accomodation</MenuItem>
                  </Select>
                </FormControl>
                  <TextField
                    sx={{ margin: 2}}
                    id="itemdescription"
                    label="Description"
                    multiline
                  />
                  <Stack direction="row" spacing={2} sx={{ margin: 2}}>
                    <Button variant="outlined">Save</Button>
                    <Button variant="outlined">Delete</Button>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Box>
  )
}
