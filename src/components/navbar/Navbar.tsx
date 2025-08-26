
import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'


const Navbar = () => {
    const logout = () => {
        localStorage.clear();
    }

  return (
    <div className='flex justify-between shrink-0 items-center gap-2 md:flex-row m-5 sm:flex-col'>
     <div >
        <h1 className='text-3xl font-bold  text-[#3C3D42]  hover:scale-110 hover:cursor-pointer ' >Shopping List</h1>
        </div>   

        <div className='flex-col flex-wrap md:flex-row  space-x-2'>
            <Link to="/profile">  <Button variant="destructive"  className='bg-[#C07858] font-bold m-1 shrink-0 text-black hover:scale-110 hover:text-[#ede7e5]  hover:bg-[#3C3D42]'>Profile</Button>  </Link>
            <Link to="/add-item">  <Button variant="destructive"  className='bg-[#C07858] font-bold  m-1 shrink-0  text-black hover:scale-110 hover:text-[#ede7e5]  hover:bg-[#3C3D42]'>Add item</Button></Link>

             <Button variant="destructive" onClick={logout}  className='bg-[#C07858] font-bold  m-1 shrink-0  text-black hover:scale-110 hover:text-[#ede7e5]  hover:bg-[#3C3D42]'>Logout</Button>
    
        </div>



    </div>
  )
}

export default Navbar