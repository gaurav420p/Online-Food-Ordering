import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
} from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

  const RestaurantDetails = () => {
  const handleRestaurantStatus=()=>{

  }
    return (
        <div className='lg:px-20 px-5 pb-10'>
            <div className='py-5 flex justify-center items-center gap-5'>
                <h1 className='text-2xl lg:text-7xl text-center font-bold p-5'>Indian Fast Food</h1>
                <div>
                    <Button 
                    color={true?"primary":"error"} 
                    className='py-[1rem] px-[2rem]' 
                    variant='contained' 
                    onClick={handleRestaurantStatus} 
                    size='large' >
                      {true?"close":"open"}
                    </Button>
                </div>
            </div>




            <Grid container spacing={2}>
              
              <Grid item xs={12}>
    <Card className="w-full">
      <CardHeader title={<span className="text-gray-300">Restaurant</span>} />
      <CardContent className="text-gray-200 space-y-4">
        <div className="flex">
          <p className="w-48">Owner</p>
          <p>
            <span className="pr-5">-</span>
            Gaurav Patel
          </p>
        </div>

        <div className="flex">
          <p className="w-48">Restaurant Name</p>
          <p>
            <span className="pr-5">-</span>
            Indian Food
          </p>
        </div>

        <div className="flex">
          <p className="w-48">Cuisine Type</p>
          <p>
            <span className="pr-5">-</span>
            Indian Cuisine
          </p>
        </div>

        <div className="flex">
          <p className="w-48">Opening Hours</p>
          <p>
            <span className="pr-5">-</span>
            10:00 AM – 10:00 PM
          </p>
        </div>

        <div className="flex">
          <p className="w-48">Status</p>
          <p>
            <span className="pr-5">-</span>
            {true ? (
              <span className="px-5 py-2 rounded-full bg-green-400 text-gray-950">Open</span>
            ) : (
              <span className="px-5 py-2 rounded-full bg-red-400 text-gray-950">Closed</span>
            )}
          </p>
        </div>
      </CardContent>
    </Card>
    </Grid>

    

    <Grid item xs={12 } lg={6}>
    <Card className="w-full">
      <CardHeader title={<span className="text-gray-300">Address</span>} />
      <CardContent className="text-gray-200 space-y-4">
        <div className="flex">
          <p className="w-48">Country</p>
          <p>
            <span className="pr-5">-</span>
            India
          </p>
        </div>

        <div className="flex">
          <p className="w-48">City</p>
          <p>
            <span className="pr-5">-</span>
            Gorakhpur
          </p>
        </div>

        <div className="flex">
          <p className="w-48">Postal Code</p>
          <p>
            <span className="pr-5">-</span>
            273004
          </p>
        </div>

        <div className="flex">
          <p className="w-48">Street Address</p>
          <p>
            <span className="pr-5">-</span>
            Basharatpur
          </p>
        </div>
      </CardContent>
    </Card>
    </Grid>



    <Grid item xs={12} lg={6}>
    <Card className="w-full">
      <CardHeader title={<span className="text-gray-300">Contact </span>} />
      <CardContent className="text-gray-200 space-y-4">
        <div className="flex">
          <p className="w-48">Email</p>
          <p>
            <span className="pr-5">-</span>
            gp12e45@gmail.com
          </p>
        </div>

        <div className="flex">
          <p className="w-48">Mobile</p>
          <p>
            <span className="pr-5">-</span>
            +91 9519694941
          </p>
        </div>

        <div className="flex">
          <p className="w-48">Social</p>
          <div>
            <span className="pr-5">-</span>
            <a href="/"><InstagramIcon sx={{fontSize:"3rem"}}/></a>
            <a href="/"><XIcon sx={{fontSize:"3rem"}}/></a>
            <a href="/"><LinkedInIcon sx={{fontSize:"3rem"}}/></a>
            <a href="/"><FacebookIcon sx={{fontSize:"3rem"}}/></a>
          </div>
        </div>


      </CardContent>
    </Card>
    </Grid>
</Grid>

        </div>
    );
};

export default RestaurantDetails;