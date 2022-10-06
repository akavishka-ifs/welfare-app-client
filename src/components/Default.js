import React from 'react';
import ImageSlider from './ImageSlider';
import UpcomingEvents from './UpcomingEvents';
import Calender from './Calender';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

export default function Default() {
    return (
      <>
        <Box sx={{ width: '100%' }}>
          <Stack spacing={6}>
            <ImageSlider/>
            <Grid sx={{
                width : "110%"
            }}>
              <Stack direction="row" spacing={10}>
                  <Calender/>
                  <UpcomingEvents/>  
              </Stack>
              </Grid>
          </Stack>
      </Box> 
     </>
      )
  }

