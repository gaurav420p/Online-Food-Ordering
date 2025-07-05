import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventsCard = () => {
  return (
    <div>
      <Card sx={{width:345}}>
        <CardMedia 
        sx={{height:345}}
        image='https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg'
        />
        <CardContent>
            <Typography variant='h5'>
                Indian Fast Food
            </Typography>
            <Typography variant='body2'>
                50% off on your First Order
            </Typography>

            <div className='py-2 space-y-2'>
                <p>{"Mumbai"}</p>
                <p className='text-sm text-blue-400'>July 5, 2025 12:00AM</p>
                <p className='text-sm text-red-400'>July 15, 2025 12:00AM</p>

            </div>
         
        </CardContent>

        
        {true &&
        <CardActions>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </CardActions>}
      </Card>
    </div>
  )
}

export default EventsCard
