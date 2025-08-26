import { useUser } from "@/gobal state/userState";
import type { User } from "@/types/User";

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";




const Registration = () => {
    //use navigate hook
    const navigate = useNavigate();

   //Form state
    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cellNumber:0
    })

    //Send data to json server
   

        //Checkbox state
    const [checkBox,setCheckBox] = useState(false);

    //user reducer to get list of users
    const {state,dispatch} = useUser();
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //Check if checkbox is checked
        if(!checkBox){
            //If not checked show error
            toast.error("Please accept the terms",{
               duration:5000,
               richColors:true,
               action:{
                 label:"Accept",
                 onClick:() => setCheckBox(true)
               }

              
            })
            return
        }//End of if statement
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

        console.log("User before sending to json server ",user);
        console.log("current users in state:", state.users.length);
         console.log("before:", state.users);

         //check if user already exist 
      const existingUsersData = await fetch('http://localhost:8000/users',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },});

        const data = await existingUsersData.json();

      console.log("existing users",data);
    //check if user already exists
    const existingUser = data.find((u:User) => u.email === user.email);
    if(existingUser){
        toast.error("User already exists",{
            duration:5000,
            richColors:true
        })
        return
    }   
    //User before sending to json server
   
    const response = await fetch("http://localhost:8000/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user) //Convert user object javascript string 
        })
        //Check if response is ok
        if(!response.ok){
            toast.error("Registration failed",{
                duration:5000,
                richColors:true
            })
        }
           
       //Check if response is ok
        if(response.ok){
             //Get response and convert to javascript json
             const data = await response.json();
             console.log("Data from response ",data)
             //use dispatch to pass our created user to array
 dispatch({type:"SET_USER",payload:data});
 //Show success message
             toast.success("Registration successful",{
            duration:5000,
            richColors:true
        })
        //navigate user to login
        navigate("/login")
        }//End of if statement
         
      }///End of handle submit

const getAllData=async()=>{
    
       


}//end of getAll users

 useEffect(() => {
    //Get all data
   getAllData();
    
 }, [])

  return (
    <div className="container p-5 w-[60%] m-0 mx-auto">

        <h1 className="text-5xl font-extrabold text-[#3C3D42]  m-5 p-2">Create account</h1>
<form onSubmit={handleSubmit}>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        
        <div>
            <label htmlFor="first_name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
        </div>
        
        
    </div>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    </div> 
    <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
    </div> 

    <div className="mb-6">
        <label htmlFor="cellphone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cell number</label>
        <input type="number" id="cellphone" value={user.cellNumber} onChange={(e) => setUser({...user, cellNumber:Number( e.target.value)})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="082 1234 1234" required />
    </div> 
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" checked={checkBox} onChange={(e) => setCheckBox(e.target.checked)} className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"  />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-white bg-[#C07858] hover:bg-[#cc927a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
      <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already have account <Link to="/login" className="text-blue-600 hover:underline dark:text-blue-500">Login</Link></label>
</form>

      



    </div>
  )
}

export default Registration

