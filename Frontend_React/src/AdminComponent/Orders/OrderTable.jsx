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
  Paper
} from '@mui/material';
import React from 'react';

const orders = [1, 1, 1, 1, 1, 1];

const OrderTable = () => {
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader title="All Orders" />
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Image</TableCell>
                  <TableCell align="right">Customer</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Ingredients</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{"1"}</TableCell>
                    <TableCell align="right">{"image"}</TableCell>
                    <TableCell align="right">{"221b163@juetguna.in"}</TableCell>
                    <TableCell align="right">{"price"}</TableCell>
                    <TableCell align="right">{"Pizza"}</TableCell>
                    <TableCell align="right">{"Ingredients"}</TableCell>
                    <TableCell align="right">{"Completed"}</TableCell>
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

export default OrderTable;
