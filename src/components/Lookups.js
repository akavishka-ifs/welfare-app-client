import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import BudgetCategories from './BudgetCategories';
import BudgetCategoryItems from './BudgetCategoryItems';
import ActiveEvent from './ActiveEvent'; 

export default function Lookups() {
  return (
    <>
     <Box sx={{ width: '100%' }}>
      <Stack spacing={0}>
        <BudgetCategories/>
        <BudgetCategoryItems/>
        <ActiveEvent/>
      </Stack>
    </Box> 
    </>
  );
}
