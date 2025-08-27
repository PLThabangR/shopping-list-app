import React, { useState } from 'react'
//import { loggerUser, useUser } from "@/gobal state/userState";

import { toast } from "sonner";
import { Link, useNavigate } from 'react-router-dom';
import type { User } from '@/types/User';

// hooks from react redux
import {  useDispatch } from 'react-redux';
//import auth reducer from auth slice
import {login} from '@/components/redux-toolkit/app/features/authSlice'

import { Button } from '@/components/ui/button';


const Login = () => {
    
    //use selector allows us to get the state from the store
 
    //use dispatch allows us to dispatch actions /to change state
const dispatch = useDispatch();
       
    //navigate 
    const navigate = useNavigate();

    



    //get logged user 
    //Destructure to to avoid conflict with user reducer
    // const {dispatch:dispatchLoggedUser} = loggerUser();
    const [user, setUser] = useState({
        email: '',
        password: '' })


     const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        //validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user.email)) {
            toast.error("Please enter a valid email address",{
            duration:5000,
            richColors:true
        })
        return
        }
        if (user.password.length < 5) {
           toast.error("Password must be at least 5 characters",{
                duration:5000,
                richColors:true
            })
            return
        }
        //     //get users
        const existingUsersData = await fetch('http://localhost:8000/users',{
             method: 'GET',
             headers: {
               'Content-Type': 'application/json',
             },});
       
               const data = await existingUsersData.json();
       
             console.log("existing users",data);
           //check if user already exists
           const existingUser = data.find((u:User) => u.email === user.email && u.password === user.password);
           if(!existingUser){
               toast.error("Password or email is incorrect",{
                   duration:5000,
                   richColors:true
               })
               return
           }   

        if (existingUser) {
            //set logged user

            //Store logged user in the logged user reducer
           // dispatchLoggedUser({type:"SET_LoggedUser",payload:existingUser})
            //add user to the store
            dispatch(login(existingUser));
            toast.success("Login successful",{
                duration:5000,
                richColors:true
            })
            //set token
            //Math random is used to generate a random number of ten digits
           // const value = String(Math.floor(Math.random() * 10000000000));
            const token =true
            const secret =String(Math.floor(Math.random() * 10000000000));
            
             //Store token object in local storage 
            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('value', JSON.stringify(secret));
            
            //load the get user function

            //redirect to home page
            navigate("/home");

            
            
        } else {
           toast.error("Invalid email or password",{
            duration:5000,
            richColors:true
           })
        }
     }//End of handle submit
//set token function to expire after 10 minutesd of get all items fumnction



  return (
    <div>
             <div className="container p-5  w-[60%] m-0 mx-auto">

        <h1 className="text-5xl font-extrabold text-[#3C3D42] m-2 text-left p-2">Login </h1>
<form onSubmit={handleSubmit}>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        

        
        
    </div>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    </div> 
    <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
    </div> 

   <Button variant="destructive" type='submit'   className='bg-[#C07858] font-bold  m-1 shrink-0  text-white hover:scale-110 hover:text-[#ede7e5]  hover:bg-[#3C3D42]'>Login</Button>

      <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Do not have account <Link to="/register" className="text-blue-600 hover:underline dark:text-blue-500">Register</Link></label>
</form>

      



    </div>







    </div>
  )
}

export default Login