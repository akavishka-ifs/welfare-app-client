import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function BudgetCategories() {
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
              Budget Categories
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
                      <ListItemText primary="Transportation" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Food & Beverages" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Alchohol & Bites" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Tips" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Accomodation" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={8} sx={{ border: 0, p: 2 }}>
                <Box component="form">
                  <TextField 
                    sx={{ margin: 2}}
                    id="categoryname"
                    label="Name"
                    variant="outlined"
                  />
                  <FormGroup sx={{ margin: 2 }}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked id="active" />}
                      label="Active"
                    />
                  </FormGroup>
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
