import {
  Divider,
  FormControl,
  Grid,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import React, { useState } from 'react';
import MenuCard from './MenuCard';

const categories = [
  "pizza",
  "biryani",
  "Burger",
  "Momos",
  "chicken"
];

const menu=[1,1,1,1,1,1];

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian only", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" }
];

const RestaurantDetails = () => {
  const [selectedFoodType, setSelectedFoodType] = useState("all");

  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
    if (e.target.name === "food_type") {
      setSelectedFoodType(e.target.value);
    }
  };

  return (
    <div className='px-5 lg:px-20 '>
      <section>
        <h3 className='text-gray-500 py-2 mt-10'>Home/india/ndian fast food/3</h3>
        <div>
          <Grid container spacing={2}>
    
            <Grid item xs={12} lg={6}>
              <img
                className='w-full h-[40vh] object-cover'
                src='https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg'
                alt=''
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className='w-full h-[40vh] object-cover'
                src='https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg'
                alt=''
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className='w-full h-[40vh] object-cover'
                src='https://images.pexels.com/photos/3556225/pexels-photo-3556225.jpeg'
                alt=''
              />
            </Grid>
          </Grid>
        </div>

        <div className='pt-3 pb-5 '>
          <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
          <p className='text-gray-500 mt-1'>Spice up your day with the taste of Indian streets!</p>
          <div className='space-y-3 mt-3'>
            <p className='text-gray-500 flex items-center gap-3'>
              <LocationOnIcon />
              <span>Lucknow, Mumbai</span>
            </p>

            <p className='text-gray-500 flex items-center gap-3'>
              <EventIcon />
              <span>Mon-Sun: 9:00 AM - 9:00 PM(Today)</span>
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className='pt-[2rem] lg:flex relative '>
        <div className='space-y-10 lg:w-[20%] filter'>
          <div className='box space-y-5 lg:sticky top-28'>
            <div>
              <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>

              <FormControl className='py-10 space-y-5' component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={selectedFoodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            <Divider />

            <div>
              <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>

              <FormControl className='py-10 space-y-5' component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_category"
                >
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div className='space-y-5 lg:w-[80%] lg:pl-10'>
            {menu.map((item)=><MenuCard/>)}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
