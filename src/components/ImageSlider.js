import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import { sizing } from '@mui/system';

const itemData = [
    {
      img: '/Images/Image from iOS (11).jpg'
    },
    {
      img: '/Images/Image from iOS (12).jpg'
    },
    {
      img: '/Images/Image from iOS (13).jpg'
    },
    {
      img: '/Images/Image from iOS (14).jpg'
    },
    {
      img: '/Images/Image from iOS (15).jpg'
    },
    {
      img: '/Images/Image from iOS (16).jpg'
    },
    {
      img: '/Images/Image from iOS (17).jpg'
    },
    {
      img: '/Images/Image from iOS (18).jpg'
    },
    {
      img: '/Images/Image from iOS (18).jpg'
    },
    {
      img: '/Images/Image from iOS (18).jpg'
    }
  ];
  
export default function ImageSlider() {
    return (
        <Box
            sx={{
                width : "110%"
            }}
          >
              <Paper
                sx={{ p: 3}}
                elevation={5} 
              >
                  <ImageList   sx={{
                      gridAutoFlow: "column",
                      gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr)) !important",
                      gridAutoColumns: "minmax(250px, 1fr)",
                    }}>
                    {itemData.map((item) => (
                    <ImageListItem >
                    <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                    />
                    </ImageListItem>
                    ))}
                  </ImageList>
              </Paper>
        </Box>
      )
  }

