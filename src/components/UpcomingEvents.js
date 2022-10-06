import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardHeader from '@mui/material/CardHeader';



export default function UpcomingEvents() {
    return (
        <Box
            sx={{
                width : "50%",
            }}
          >
              <Paper style={{maxHeight: 400}}
                sx={{ p: 3}}
                elevation={5} 
              >
                <card style={{backgroundColor: "white" , height: '17vw', display: 'block'}}>
                <CardHeader title = "One Day Event"
                            subheader="Date : To be decided / Place: Down South"
                />
              </card>
              </Paper>
        </Box>
      )
  }

