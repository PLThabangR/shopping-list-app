import type { User } from '@/types/User';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { updateUser } from '@/components/redux-toolkit/app/features/authSlice';



const Profile = (userProp:User) => {


  console.log("userProp",userProp)
    //hooks
const dispatch = useDispatch();
 //use navigate hook
    const navigate = useNavigate();

 //initalize state with the props value
 const [user,setUser] = useState<User>(userProp);

 //Update user after every render
useEffect(() => {
  setUser(userProp);
}, [userProp]);
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
      
         //validation goes here
         //Check if password is at least 5 characters
         if(user.password.length < 5){
            toast.error("Password must be at least 5 characters",{
                duration:5000,
                richColors:true
            })
            return
         }// End of if statement

         //encrypt pass with bcrypt
        

          //Check if email is valid using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
        toast.error("Please enter a valid email address",{
            duration:5000,
            richColors:true
        })
        return
    }//End of if statement

    //Check if phone number is valid
    if(user.cellNumber.toString().length+1 < 10){
        toast.error("Please enter a valid phone number",{
            duration:5000,
            richColors:true
        })
        return
    }//end of if statement

    if(user.firstName.length < 2 || user.lastName.length < 2){
        toast.error("First name and last name must be at least 2 characters",{
            duration:5000,
            richColors:true
        })
        return
    }//end of if statement 

   

    
    //Update user from json server
    const response = await fetch(`http://localhost:8000/${user.id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user) //Convert user object javascript string 
        })
        //Check if response is ok
        if(!response.ok){
            toast.error("Update user failed",{
                duration:5000,
                richColors:true
            })
        }
           
       //Check if response is ok
        if(response.ok){
           //use dispatch to update state
          dispatch(updateUser(user));
 //Show success message
             toast.success("User updated successful",{
            duration:5000,
            richColors:true
        })
        //navigate user to login
        navigate("/")
        }//End of if statement
         
      }///End of handle submit



    
  return (
    <>
   <div className="container p-5 w-[60%] m-0 mx-auto">

        <h1 className="text-5xl font-extrabold text-[#3C3D42] text-left m-2 p-2">User Profile</h1>
<form onSubmit={handleSubmit}>
    <div className="grid gap-6 mb-6 md:grid-cols-2 ">
        
        <div>
            <label htmlFor="first_name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        </div>
        
        
    </div>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
    </div> 
    <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
    </div> 

    <div className="mb-6">
        <label htmlFor="cellphone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cell number</label>
        <input type="number" id="cellphone" value={user.cellNumber} onChange={(e) => setUser({...user, cellNumber:Number( e.target.value)})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div> 
  
     <Button variant="destructive" type="submit"  className='bg-[#C07858] font-bold  m-1 shrink-0  text-white hover:scale-110 hover:text-[#ede7e5]  hover:bg-[#3C3D42]'>Update </Button>
      <Link to={"/home"}><button type="button" className="text-white bg-[#C07858] hover:bg-[#cc927a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2">Back</button></Link>
</form>

      



    </div>

      
    </>
  )
}

export default Profile