
import React from 'react'
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center gap-2 md:flex-row m-5 sm:flex-col'>
     <div >
        <h1 className='text-3xl font-bold  text-[#3C3D42]  hover:scale-110 hover:cursor-pointer ' >Shopping List</h1>
        </div>   

        <div className='flex-col flex-wrap md:flex-row  space-x-2'>
           <Button variant="destructive"  className='bg-[#C07858] font-bold m-1 text-black hover:scale-110 hover:text-[#ede7e5]  hover:bg-[#3C3D42]'>Profile</Button>
            <Button variant="destructive"  className='bg-[#C07858] font-bold  m-1  text-black hover:scale-110 hover:text-[#ede7e5]  hover:bg-[#3C3D42]'>Add item</Button>
             <Button variant="destructive"  className='bg-[#C07858] font-bold  m-1  text-black hover:scale-110 hover:text-[#ede7e5]  hover:bg-[#3C3D42]'>Logout</Button>
    
        </div>



    </div>
  )
}

export default Navbar