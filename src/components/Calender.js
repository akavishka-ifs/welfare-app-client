import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"; 
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import TextField from '@mui/material/TextField';


export default function UpcomingEvents() {
  const [value, setValue] = React.useState(new Date());
    return (
        <Box
            sx={{
                width : "50%",
                height : "20"
            }}
          >
              <Paper 
                style={{maxHeight: 400, backgroundColor: "#F0F0F0"}}
                sx={{ p: 3}}
                elevation={5} 
                >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Paper>
        </Box>
      )
  }

