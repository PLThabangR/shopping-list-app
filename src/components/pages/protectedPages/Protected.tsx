import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';


interface ProtectedProps {
    children: React.ReactNode
}
const Protected = ({children}:ProtectedProps) => {
  const navigate = useNavigate();
     const [isAuthenticated] = useState<string>((() => {
     //get email from local storage
     const userToken = localStorage.getItem('token')
     return userToken ? userToken.toString() : ""
   }));

   useEffect(()=>{
      if (!isAuthenticated) {
         
    toast.error("You are not logged in",{
        duration:5000,
        richColors:true
    })
  navigate('/')
  }
        //redirect to login page
       

   },[])

  return (
    <div>

        {children}


    </div>
  )
}

export default Protected