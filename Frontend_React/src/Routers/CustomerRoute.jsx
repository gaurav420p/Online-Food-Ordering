import React from 'react'
import Profile from '../Components/Profile/Profile'; // update path if needed
import ProfileNavigation from '../Components/Profile/ProfileNavigation';
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Components/Home/Home';
import RestaurantDetails from '../Components/Restaurant/RestaurantDetails'
import Cart from '../Components/Cart/Cart'
import { Route, Routes } from 'react-router-dom';
import Auth from '../Components/Auth/Auth';

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
