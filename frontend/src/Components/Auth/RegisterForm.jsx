import { Button, FormControl, InputLabel, MenuItem, TextField, Typography } from '@mui/material'
import { Formik, Form, Field } from 'formik';
import React from 'react'
import { Select } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';

const initialValues={
  fullName:"",
  email:"",
  password:"",
  role:"ROLE_CUSTOMER"
}

const RegisterForm = () => {

  const navigate=useNavigate();
  const handleSubmit=(values)=>{
    console.log("form values",values)
  }


  return (
    <div>
      
      <Typography variant='h5' className='text-center'>
        Register
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>

        <Form>
          <Field
                      as={TextField}
                      name="fullName"
                      label="fullName"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      />
      
          <Field
                      as={TextField}
                      name="email"
                      label="email"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      />
      
        <Field
                      as={TextField}
                      name="password"
                      label="password"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      type="password"
                      />

                      {/* <Field
                      as={TextField}
                      name="role"
                      label="role"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      /> */}


    
                        <Field
                        fullWidth margin="normal"
                        as={Select}
                        labelId="role-label"
                        id="demo-simple-select"
                        name="role"
                        // value={values.role}
                        // onChange={handleChange}
                     
                        >
                          <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
                        <MenuItem value="ROLE_RESTAURANT">Restaurant</MenuItem>
                        </Field>
                      
                   

                      <Button sx={{mt:2, padding:"1 rem" }} fullWidth type='submit' variant='contained'>
                        Register
                      </Button>
        </Form>

      </Formik>



      <Typography variant='body2' align='center' sx={{mt:3}}>
        If have an account already?
        <Button size="small" onClick={()=>navigate("/account/login")}>
          login
        </Button>
      </Typography>
    </div>
  )
}

export default RegisterForm
