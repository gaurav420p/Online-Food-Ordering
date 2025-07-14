import React, { useState } from 'react';
import {
  Card,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';
import OrderTable from './OrderTable'; // adjust path as needed

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "All", value: "all" },
];

const Orders = () => {
  const [filterValue, setfilterValue] = useState("all");

  const handleFilter = (e) => {
    setfilterValue(e.target.value);
  };

  return (
    <div className="px-2">
      <Card className="p-5">
        <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
          Order Status
        </Typography>
        <FormControl className="py-10" component="fieldset">
          <RadioGroup
            row
            name="category"
            value={filterValue}
            onChange={handleFilter}
          >
            {orderStatus.map((item) => (
              <FormControlLabel
                key={item.label}
                value={item.value}
                control={<Radio />}
                label={item.label}
                sx={{ color: "gray" }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Card>
      <OrderTable name={"All Orders"} />
    </div>
  );
};

export default Orders;
