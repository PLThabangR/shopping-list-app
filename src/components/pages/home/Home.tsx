
//import { useItem } from "@/gobal state/itemState";
//import { loggerUser } from "@/gobal state/userState";
import ItemCard from "@/components/ItemsCard/ItemCard"
import Navbar from "@/components/navbar/Navbar"
import type { Item } from "@/types/ShoppingList";
import {  useEffect, useState } from "react";
import { toast } from "sonner";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/components/redux-toolkit/app/store";
import { addItems } from "@/components/redux-toolkit/app/features/itemSlice";

const Home = () => {
   //const {state:loggedUser} = loggerUser();
//const {state:items,dispatch:dispatchItems} = useItem();
const [loading,setLoading] = useState(false);

//get logged user
const loggedUser = useSelector((state:RootState) => state.auth.user)
const dispatch = useDispatch();

const items = useSelector((state:RootState) => state.items.items);

   const getAllItems =async () =>{
    

      setLoading(true);

    const response = await fetch('http://localhost:8000/items',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },

       }) 
       if(!response.ok){
        toast.error("Error fetching items",{
            duration:5000,
            richColors:true
        })
        return
       }

       if(response.ok){
        // toast.success("Items fetched successfully",{
        //     duration:5000,
        //     richColors:true
        // })
        setLoading(false);
         const data = await response.json();
     
        //filter items by logged user
      const  loggedUserItems=data.filter((item:Item) => item.email === loggedUser.email);
         
        //Ad logged user items to items array
        //add items as singular not array
         for (let i = 0; i < loggedUserItems.length; i++) {
        
        dispatch(addItems(loggedUserItems[i]));//add items to items array
       }//end of for
       

 }//end of if
   }//end of get all items fumnction

   //Display items on card 
   const DisplayItems = items.map((item:Item) => <ItemCard key={item.email} email={item.email} category={item.category} name={item.name} quantity={item.quantity} notes={item.notes} imageUrl={item.imageUrl}  />)


   useEffect(()=>{
    //run only once when its mounted
if (items.length === 0) {
      getAllItems();
      console.log("This wil run only once");
    }


   },[])



  return (
    <div className="h-screen">
     
    <Navbar/>
        <h1 className="text-2xl shrink-0 font-extrabold text-[#3C3D42] md:text-5xl text-center  m-2 p-2"><span className="text-[#C07858] ">Welcome {loggedUser.firstName}</span>  to your shopping list</h1>
        <p className="text-base font-light shrink-0 text-[#3C3D42] md:text-2xl text-center  m-1 p-1">Let you shopping plan become a success</p>
          
        <div className="flex flex-col justify-center items-center  md:flex-row md:justify-evenly md:flex-wrap gap-1 ">

            {items.length > 0 ?DisplayItems: <h1 className="text-2xl shrink-0 font-extrabold text-[#3C3D42] md:text-5xl text-center  m-2 p-2">No items found</h1> }
          
        </div>
    </div>
  )
}

export default Home