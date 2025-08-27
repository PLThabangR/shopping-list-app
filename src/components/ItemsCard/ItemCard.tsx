import { Button } from "../ui/button"
import { useDispatch, useSelector } from "react-redux";
import { deleteItem,updateItem } from "@/components/redux-toolkit/app/features/itemSlice";
import { toast } from "sonner";

import type { Item } from "@/types/ShoppingList";

//import modal
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";



const ItemCard = (item:Item) => {
 const dispatch = useDispatch();
 //open modal state
 const [isModalOpen, setIsModalOpen] = useState(false);


     //const {state:LoggedUser} = loggerUser();
  
     //form state
     const [name,setName] = useState<string>('');
     const [quantity,setQuantity] = useState<number>(0);
     const [notes,setNotes] = useState<string>('');
     const [category,setCategory] = useState<string>('');
     const [imageUrl,setImageUrl] = useState<string>('');
 const openModal = () => {
     setIsModalOpen(true);
 }
//update item
const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();


 //creat new item
        const newItem:Item = {
            name,
            email:LoggedUser.email,
            quantity,
            notes,
            category,
            imageUrl
        }
        //add new item to state
      

       

       const response = await fetch('http://localhost:8000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
       }) 
       if(!response.ok){
        toast.error("Error adding item",{
            duration:5000,
            richColors:true
        })
       }//end of if

       if(response.ok){
        
        const data = await response.json();
        dispatch(addItems(data));
        toast.success("Item added successfully",{
            duration:5000,
            richColors:true

        })


          //clear form
        setName('');
        setQuantity(0);
        setNotes('');
        setCategory('');
        setImageUrl('');

       }

}
 const deleteProduct =async (item:Item) => {
     console.log(item)
    //delete item from json server
    const response = await  fetch(`http://localhost:8000/items/${item.id}`,{method:'DELETE'})

    if(!response.ok){
        toast.error("Error deleting item",{
            duration:5000,
            richColors:true
        })
        return
       }
       if(response.ok){
         dispatch(deleteItem(item));
        toast.success("Item deleted successfully",{
            duration:5000,
            richColors:true
        })
       }

    
 }


  return (
    <div>


<div className="max-w-sm md:max-w-1\4 gap-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mb-5">
    <a >
        <img  src={item.imageUrl}  className="rounded-t-lg object-cover w-100 h-48 hover:scale-105 transition duration-500"  alt="" />
    </a>
    <div className="p-5">
             
            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
         <div className=" font-bold text-gray-700 dark:text-gray-400">{item.category}</div>
        <div className="font-normal text-gray-700 dark:text-gray-400">Qty :{item.quantity}</div>
         <div className="mb-1 font-normal text-gray-700 dark:text-gray-400">Notes : { item.notes}</div>
      <Button variant="destructive"  onClick={openModal}   className='bg-[#C07858] font-bold  m-1 shrink-0  text-white hover:scale-110 hover:text-[#ede7e5]  hover:bg-[#3C3D42]'>Update</Button>
       <Button variant="destructive"  onClick={()=>deleteProduct(item)}  className='bg-[#3C3D42] font-bold  m-1 shrink-0  text-white hover:scale-110 hover:text-[#ede7e5 ]  hover:bg-[#FF0033]'>Delete</Button>
    </div>
</div>



{/* modal */}

{ (<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent>
        <div className="container  w-[100%] m-0 mx-auto">

        
<form onSubmit={handleSubmit}>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        
        <div>
            <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" id="name" value={item.name} onChange={(e) => setName(()=> e.target.value )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bread" required />
        </div>
        <div>
            <label htmlFor="quantity" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Quantity</label>
            <input type="text" id="quantity" value={item.quantity} onChange={(e) => setQuantity(()=> Number(e.target.value) )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10" required />
        </div>
        
        
    </div>
    <div className="mb-6">
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <input type="text" id="description" value={item.notes} onChange={(e) => setNotes(()=> e.target.value )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required />
    </div> 
    <div className="mb-6">

         <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
  <select id="categories" value={item.category} onChange={(e) => setCategory(()=> e.target.value )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    <option value="fruits">Fruits</option>
    <option value={'vegetables'}>Vegetables</option>
      <option value={'appliances'}>Appliances</option>
    <option value={'breakfast'}>Breakfast</option>
    <option value={'dinner'}>Dinner</option>
    <option value={'beverage'}>Beverage</option>
    <option value={'dessert'}>Dessert</option>
    <option value={'snacks'}>Snacks</option>
     <option value={'frozen'}>Frozen</option>
      <option value={'fast food'}>fast food</option>
  </select>
         
    </div> 

    <div className="mb-6">
        <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image url</label>
        <input type="text" id="imageUrl" value={item.imageUrl} onChange={(e) => setImageUrl(()=> e.target.value )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://picsum.photos/200/300" required />
    </div> 
    
    <button type="submit" className="text-white bg-[#C07858] hover:bg-[#cc927a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2">Update item </button>
    
   
</form>

    </div>
     
      </DialogContent>
</Dialog>)}


    </div>
  )
}

export default ItemCard