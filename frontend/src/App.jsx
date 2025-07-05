import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Navbar from './Components/Navbar/Navbar';
import darkTheme from './Theme/DarkTheme';
import Home from './Components/Home/Home';
import RestaurantDetails from './Components/Restaurant/RestaurantDetails';
import Cart from './Components/Cart/Cart';
import Profile from './Components/Profile/Profile';
import CustomerRoute from './Components/Routers/CustomerRoute';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <Navbar />
      {/* <Home/>
       */}
       {/* <RestaurantDetails/>
       <C */}
       {/* <Cart/> */}
       {/* <Profile/> */} 
       <CustomerRoute/>
       
    </ThemeProvider>
  );
};

export default App;
