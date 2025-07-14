import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Navbar from './Components/Navbar/Navbar';
import darkTheme from './Theme/DarkTheme';
import Home from './Components/Home/Home';
import RestaurantDetails from './Components/Restaurant/RestaurantDetails';
import Cart from './Components/Cart/Cart';
import Profile from './Components/Profile/Profile';
import CustomerRoute from './Routers/Routers';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "./Components/State/Authentication/Action";
import Routers from './Routers/Routers';


const App = () => {
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {auth}=useSelector(store=>store)

  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt])
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
     
       <Routers/>
       
    </ThemeProvider>
  );
};

export default App;
