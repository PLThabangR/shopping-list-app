import { useUser } from "@/gobal state/userState";
import type { User } from "@/types/User";
import { useState } from "react"
import { toast } from "sonner";




const Registration = () => {
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

    //user reducer
    const {state,dispatch} = useUser();
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if(!checkBox){
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
         if(user.password.length < 5){
            toast.error("Password must be at least 5 characters",{
                duration:5000,
                richColors:true
            })
            return
         }// End of if statement

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
    if(user.cellNumber.toString().length !== 10){
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

    //User before sending to json server
   
        const response = await fetch("http://localhost:8000/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user) //Convert user object javascript string 
        })
            //Get response and convert to javascript json
        const data = await response.json();
       
        console.log("new user ",data)
        dispatch({type:"SET_USER",payload:data});

        toast.success("Registration successful",{
            duration:5000,
            richColors:true
        })
     
        
      }



  return (
    <div className="container p-5">

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
        <label htmlFor="cellphone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
        <input type="number" id="cellphone" value={user.cellNumber} onChange={(e) => setUser({...user, cellNumber: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="082 1234 1234" required />
    </div> 
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" checked={checkBox} onChange={(e) => setCheckBox(e.target.checked)} className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"  />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-white bg-[#C07858] hover:bg-[#cc927a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

      



    </div>
  )
}

export default Registration

