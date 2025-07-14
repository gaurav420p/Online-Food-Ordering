import React from 'react';
import IngredientsTable from './IngredientsTable';
import IngredientsCategoryTable from './IngredientsCategoryTable';
import { Grid, Box } from '@mui/material';

const Ingredients = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2, padding: 2 }}>
      <Box sx={{ flex: 2 }}>
        <IngredientsTable />
      </Box>
      <Box sx={{ flex: 1 }}>
        <IngredientsCategoryTable />
      </Box>
    </Box>
  );
};

export default Ingredients;
