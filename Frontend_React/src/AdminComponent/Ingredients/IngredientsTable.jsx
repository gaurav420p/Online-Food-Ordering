import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CardActions,
  IconButton
} from '@mui/material';
import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

const orders = [1, 1, 1, 1, 1, 1];

const IngredientsTable = () => {
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title="Menu"
          action={
            <IconButton aria-label="settings">
              <CreateIcon />
            </IconButton>
          }
          sx={{ pt: 2, alignItems: 'center' }}
        />


        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Id</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Category</TableCell>
                  <TableCell align="left">Availability </TableCell>
                  
                  

                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >

                    <TableCell align="left">{"1"}</TableCell>
                    <TableCell align="leftt">{"221b163@juetguna.in"}</TableCell>
                    <TableCell align="left">{"price"}</TableCell>
                    <TableCell align="left">{"Pizza"}</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default IngredientsTable
