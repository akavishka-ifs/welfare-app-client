import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


export default function Vendors() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width:1000 ,
            height:1000 ,
          },
        }}
      >
        <Paper elevation={5} >
            <Typography variant="h1" gutterBottom>
                Vendors
            </Typography>
        </Paper>
      </Box>
    </div>
  )
}
