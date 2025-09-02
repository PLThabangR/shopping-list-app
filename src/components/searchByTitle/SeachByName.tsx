import { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useDispatch } from 'react-redux';
import { searchByName } from '../redux-toolkit/app/features/itemSlice';

const SeachByName = () => {
//hooks
const [search, setSearch] = useState('')
const dispatch = useDispatch()
//useEffect to update search
useEffect(() => {
  console.log(search)
 dispatch(searchByName(search))
}, [search])  

  return (
    <>


<div>
  <div className="flex items-center">
      <Input
        type="text"
        
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-64 border-1 border-[#C07858]  hover:border-[#3C3D42] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  


</div>





    </>
  )
}

export default SeachByName