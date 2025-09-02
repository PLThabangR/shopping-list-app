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
        className="w-full md:w-64 "
      />
    </div>
  


</div>





    </>
  )
}

export default SeachByName