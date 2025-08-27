
import React from 'react'
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from 'react-router-dom'
// import { loggerUser } from '@/gobal state/userState';

import { useDispatch, useSelector } from "react-redux";
import { logout } from '@/components/redux-toolkit/app/features/authSlice';
import type { RootState } from "@/components/redux-toolkit/app/store";
import { clearItems } from '../redux-toolkit/app/features/itemSlice';


const Navbar = () => {
     //Destructure to to avoid conflict with user reducer
       //const {state:loggetedUser,dispatch:dispatchLoggedUser} = loggerUser();

     const loggedUser = useSelector((state:RootState) => state.auth.user)
const dispatch = useDispatch();
  const  navigate= useNavigate();
    const logoutUser = () => {
        //clear local storage
        localStorage.clear();
        // we calling logout action to clear value of logged user
       // dispatchLoggedUser({type:"LOGOUT",payload:loggetedUser});
      
       //clear user state on logout
        dispatch(logout());
        //clear products state on logout
        dispatch(clearItems())
        //redirect to login
        navigate('/');
    }

  return (
    <div className='flex justify-between shrink-0 items-center gap-2 md:flex-row m-5 sm:flex-col'>
     <div >
        <h1 className='text-3xl font-bold  text-[#3C3D42]  hover:scale-110 hover:cursor-pointer ' >Shopping List</h1>
        </div>   

        <div className='flex-col flex-wrap md:flex-row  space-x-2'>
            <Link to="/profile">  <Button variant="destructive"  className='bg-[#FEF9EF] border-1 border-[#C07858] font-bold m-1 shrink-0 text-[#C07858] hover:scale-110 hover:text-[#ede7e5]  hover:bg-[#3C3D42]'>Profile</Button>  </Link>
            <Link to="/add-item">  <Button variant="destructive"  className='bg-[#FEF9EF] border-1 border-[#C07858] font-bold m-1 shrink-0 text-[#C07858] hover:scale-110 hover:text-[#ede7e5]  hover:bg-[#3C3D42]'>Add item</Button></Link>

             <Button variant="destructive" onClick={logoutUser}  className='bg-[#C07858] font-bold  m-1 shrink-0  text-white hover:scale-110 hover:text-[#ede7e5]  hover:bg-[#3C3D42]'>Logout</Button>
    
        </div>



    </div>
  )
}

export default Navbar