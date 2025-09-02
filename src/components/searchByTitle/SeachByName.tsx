import { useEffect, useState } from 'react'
import { Button } from '../ui/button';

const SeachByName = () => {
//hooks
const [search, setSearch] = useState('')

//useEffect to update search
useEffect(() => {
  console.log(search);
}, [search])  

  return (
    <>


<div>

  <Button>sdsds</Button>
</div>





    </>
  )
}

export default SeachByName