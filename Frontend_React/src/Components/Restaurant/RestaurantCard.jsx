import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Card, Chip, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const RestaurantCard = ({item}) =>  {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const handleAddToFavorite=()=>{
    dispatch(AddToFavorite({restaurantId:item.id,jwt}))
  }

  return (
    <Card className='w-[18rem]'>
      <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
        <img 
          className='w-full h-[10rem] rounded-t-md object-cover'
          src={item.images[1]}
          alt=""
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={item.open? "success" : "error"}
          label={item.open ? "Open" : "Closed"}
        />
      </div>

      <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
          <p className='font-semibold text-lg'>{item.name}</p>
          <p className='text-gray-500 text-sm'>
            {item.description}
          </p>
        </div>
        <div>
           <IconButton>
            {{isPresentInFavorites} ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
        </div>


      </div>
    </Card>
  );
};

export default RestaurantCard;
