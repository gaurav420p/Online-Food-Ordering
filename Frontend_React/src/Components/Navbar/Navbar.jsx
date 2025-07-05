import { IconButton,Avatar, Badge } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
  return (
    <div className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
        
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <span className='logo font-semibold text-gray-300 text-2xl'>
                            CraveCart
                </span>
            </div>

            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div className=''>
                    <IconButton>
                         <SearchIcon sx={{fontSize:"1.5rem",color: "white"}}/>
                         </IconButton>
                </div>

                <div className=''>
                    {true?<Avatar sx={{bgcolor:"white",color:pink.A400}}>G</Avatar>:
                    <IconButton onClick={()=>navigate("/account/login")}>
                        <PersonIcon/>
                        </IconButton>
                    }

                </div>

                <div className=''>
                    <IconButton>
                         <Badge color='secondary' badgeContent={3}>
                            <ShoppingCartIcon sx={{fontSize:"1.5rem",color: "white"}}/>
                         </Badge>
                    </IconButton>
                    
                </div>

            </div>

      

      
    </div>
  )
}

export default Navbar
