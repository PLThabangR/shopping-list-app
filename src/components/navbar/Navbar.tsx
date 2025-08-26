
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
     <div >
        <h1 className='text-3xl font-bold tracking-normal hover:scale-110 hover:cursor-pointer ' >Shopping List</h1>
        </div>   

        <div className='flex space-x-4'>
            <button>Add Item</button>
            <button>Profile</button>
        </div>



    </div>
  )
}

export default Navbar