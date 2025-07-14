import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  TextField
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';

const initialValues = {
  name: "",
  description: "",
  cuisineType: "",
  streetAddress: "",
  city: "",
  stateProvince: "",
  postalCode: "",
  country: "",
  email: "",
  mobile: "",
  twitter: "",
  instagram: "",
  facebook: "",
  linkedIn: "",
  openingHours: "",
  images: []
};

const CreateRestaurantForm = () => {
  const [uploadImage, setUplodImage] = useState(false);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const data={
        name:values.name,
        description:values.description,
        cuisineType:values.cuisineType,
        address:{
        streetAddress:values.streetAddress,
        city:values.city,
        stateProvince:values.stateProvince,
        postalCode:values.postalCode,
        country:values.country,
        },
        ContactInformation: {
          email:values.email,
          mobile: values.mobile,
          instagram: values.instagram,
          twitter: values.twitter,
          facebook: values.facebook,
          linkedIn: values.linkedIn
        },
        openingHours: values.openingHours,
        images: values.images
      };
      console.log("data",data)
    }
  });

  const handleImageChange = () => {};
  const handleRemoveImage = (index) => {};

  return (
    <div className='py-10 px-5 flex items-center justify-center min-h-screen'>
      <div className="w-full max-w-3xl mx-auto">
        <h1 className='font-bold text-2xl text-center py-2'>Add New Restaurant</h1>
        <form onSubmit={formik.handleSubmit} className='space-y-4'>
          
            {/* Image Upload */}
            <div className='flex flex-wrap gap-5' item xs={12}>
              <input
                accept='image/*'
                id='fileInput'
                style={{ display: "none" }}
                onChange={handleImageChange}
                type='file'
              />
              <label htmlFor="fileInput" className='relative'>
                <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600'>
                  <AddPhotoAlternateIcon className='text-white' />
                </span>
                {uploadImage && (
                  <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                    <CircularProgress />
                  </div>
                )}
              </label>
              <div className='flex flex-wrap gap-2 '>
                {[1,1].map((image, index) => (
                  <div className='relative' key={index}>
                    <img className='w-24 h-24 object-cover'
                      src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg" alt='' />
                    <IconButton
                      size='small'
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        outline: "none"
                      }}
                      onClick={() => handleRemoveImage(index)}>
                      <CloseIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>
                  </div>
                ))}
              </div>
            </div>

            <Grid container spacing={2}>
            {/* Name */}
            <Grid item xs={12}>
              <TextField fullWidth id="name" name="name" label="Name" variant="outlined" onChange={formik.handleChange} value={formik.values.name} />
            </Grid>
                {/*  Description  */}
            <Grid item xs={12} >
              <TextField fullWidth id="description" name="description" label="Description" variant="outlined" onChange={formik.handleChange} value={formik.values.description} />
            
            </Grid>
            {/* Cuisine Type */}
            <Grid item xs={12} lg={6}>
              <TextField fullWidth id="cuisineType" name="cuisineType" label="Cuisine Type" variant="outlined" onChange={formik.handleChange} value={formik.values.cuisineType} />
            </Grid>
            {/*  & Opening Hours */}
            
            <Grid item xs={12}>
              <TextField fullWidth id="openingHours" name="openingHours" label="Opening Hours" variant="outlined" onChange={formik.handleChange} value={formik.values.openingHours} />
            </Grid>
            {/* Street Address */}
            <Grid item xs={12}>
              <TextField fullWidth id="streetAddress" name="streetAddress" label="Street Address" variant="outlined" onChange={formik.handleChange} value={formik.values.streetAddress} />
            </Grid>

            {/* City, State, Postal Code */}
            <Grid item xs={12}>
              <TextField fullWidth id="city" name="city" label="City" variant="outlined" onChange={formik.handleChange} value={formik.values.city} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="stateProvince" name="stateProvince" label="State/Province" variant="outlined" onChange={formik.handleChange} value={formik.values.stateProvince} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="postalCode" name="postalCode" label="Postal Code" variant="outlined" onChange={formik.handleChange} value={formik.values.postalCode} />
            </Grid>
            {/* Country */}
            <Grid item xs={12}>
              <TextField fullWidth id="country" name="country" label="Country" variant="outlined" onChange={formik.handleChange} value={formik.values.country} />
            </Grid>

            {/* Email & Mobile */}
            <Grid item xs={12}>
              <TextField fullWidth id="email" name="email" label="Email" variant="outlined" onChange={formik.handleChange} value={formik.values.email} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="mobile" name="mobile" label="Mobile" variant="outlined" onChange={formik.handleChange} value={formik.values.mobile} />
            </Grid>

            {/* Instagram & Twitter */}
            <Grid item xs={12} lg={6}>
              <TextField fullWidth id="instagram" name="instagram" label="Instagram" variant="outlined" onChange={formik.handleChange} value={formik.values.instagram} />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth id="twitter" name="twitter" label="Twitter" variant="outlined" onChange={formik.handleChange} value={formik.values.twitter} />
            </Grid>

            {/* Facebook & LinkedIn */}
            <Grid item xs={12} lg={6} >
              <TextField fullWidth id="facebook" name="facebook" label="Facebook" variant="outlined" onChange={formik.handleChange} value={formik.values.facebook} />
            </Grid>
            <Grid item xs={12} lg={6} >
              <TextField fullWidth id="linkedIn" name="linkedIn" label="LinkedIn" variant="outlined" onChange={formik.handleChange} value={formik.values.linkedIn} />
            </Grid>
          </Grid>
          <Button className='mt-' variant="contained" color="primary" type="submit"> Create New Restaurant</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateRestaurantForm;
