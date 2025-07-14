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

const MenuTable = () => {
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
                  <TableCell align="right">Image</TableCell>
                  <TableCell align="right">Title</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Ingredients</TableCell>
                  <TableCell align="right">Availability </TableCell>
                  <TableCell align="right"></TableCell>
                  

                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >

                    <TableCell align="right">{"image"}</TableCell>
                    <TableCell align="right">{"221b163@juetguna.in"}</TableCell>
                    <TableCell align="right">{"price"}</TableCell>
                    <TableCell align="right">{"Pizza"}</TableCell>
                    <TableCell align="right"><IconButton><DeleteIcon/></IconButton></TableCell>
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

export default MenuTable;
