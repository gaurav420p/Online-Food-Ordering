import { Button, Card } from '@mui/material'
import React from 'react'

const OrdersCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'> 
    <div className='flex items-center space-x-5'>
        <img className='h-16 w-16'
        src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg" 
        alt=""
        />
        <div>
            <p>Cake</p>
            <p>₹499</p>
        </div>    
    </div>
    <div>
        <Button disabled className='cursor-not-allowed'>Completed</Button>
    </div>

    </Card>
  )
}

export default OrdersCard
