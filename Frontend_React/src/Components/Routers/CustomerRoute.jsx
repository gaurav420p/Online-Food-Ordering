import React from 'react'
import Profile from '../Profile/Profile'; // update path if needed
import ProfileNavigation from '../Profile/ProfileNavigation';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import RestaurantDetails from '../Restaurant/RestaurantDetails'
import Cart from '../Cart/Cart'
import { Route, Routes } from 'react-router-dom';
import Auth from '../Auth/Auth';

const CustomerRoute = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account/:register' element={<Home/>}/>
        <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/my-profile/*' element={<Profile />} />
      </Routes>
      <Auth/>
      
    </div>
  )
}

export default CustomerRoute
