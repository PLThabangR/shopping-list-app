import ItemCard from "@/components/ItemsCard/ItemCard"
import Navbar from "@/components/navbar/Navbar"
import { useItem } from "@/gobal state/itemState";

import { loggerUser } from "@/gobal state/userState";
import type { Item } from "@/types/ShoppingList";
import { useEffect } from "react";
import { toast } from "sonner";

const Home = () => {
   const {state:loggedUser} = loggerUser();
const {state:items,dispatch:dispatchItems} = useItem();           
   const getAllItems =async () =>{

    const response = await fetch('http://localhost:8000/items',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },

       }) 
       if(!response.ok){
        toast.error("Error fetching item",{
            duration:5000,
            richColors:true
        })
        return
       }

       if(response.ok){
        toast.success("Items fetched successfully",{
            duration:5000,
            richColors:true
        })
         const data = await response.json();
        //filter items by logged user
      const  loggedUserItem=data.filter((item:Item) => item.email === loggedUser.email);

         //set items in the state
          dispatchItems({type:"SET_ITEMS",payload:loggedUserItem})

       }
      



   }


   useEffect(()=>{
getAllItems();

   },[])



  return (
    <div className="h-screen">
     
    <Navbar/>
        <h1 className="text-2xl shrink-0 font-extrabold text-[#3C3D42] md:text-5xl text-center  m-2 p-2"><span className="text-[#C07858] ">Welcome {loggedUser.firstName}</span>  to your shopping list</h1>
        <p className="text-base font-light shrink-0 text-[#3C3D42] md:text-2xl text-center  m-1 p-1">Let you shopping plan become a success</p>
          
        <div className="flex flex-col justify-center items-center  md:flex-row md:justify-evenly md:flex-wrap gap-1 ">

       
          
        </div>
    </div>
  )
}

export default Home