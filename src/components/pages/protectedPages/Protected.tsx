import React, { useState } from 'react'
import { toast } from 'sonner';


interface ProtectedProps {
    children: React.ReactNode
}
const Protected = ({children}:ProtectedProps) => {
     const [isAuthenticated] = useState<string>((() => {
     //get email from local storage
     const userToken = localStorage.getItem('token')
     return userToken ? userToken.toString() : ""
   }));

    if(!isAuthenticated){
        toast.error("You are not logged in",{
            duration:5000,
            richColors:true
        })
    }

  return (
    <div>

        {children}


    </div>
  )
}

export default Protected