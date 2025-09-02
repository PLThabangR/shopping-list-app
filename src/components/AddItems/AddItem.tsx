import type { Item } from '@/types/ShoppingList';
import React, {  useState } from 'react'
import { toast } from 'sonner';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import type { RootState } from '../redux-toolkit/app/store';
import { useDispatch } from 'react-redux';
import { addItems } from '../redux-toolkit/app/features/itemSlice';
import { Button } from '../ui/button';


const AddItem = () => {
  //get items hook
  
 
    //get logged user
const LoggedUser = useSelector((state:RootState) => state.auth.user)
  
const dispatch = useDispatch();
    //const {state:LoggedUser} = loggerUser();
 
    //form state
    const [name,setName] = useState<string>('');
    const [quantity,setQuantity] = useState<number>(0);
    const [notes,setNotes] = useState<string>('');
    const [category,setCategory] = useState<string>('');
    const [imageUrl,setImageUrl] = useState<string>('');


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


  return (
    <>

<div className="container p-5 w-[60%] m-0 mx-auto">

        <h1 className="text-5xl font-extrabold text-[#3C3D42]  m-5 p-2">Add Item</h1>
<form onSubmit={handleSubmit}>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        
        <div>
            <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(()=> e.target.value )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bread" required />
        </div>
        <div>
            <label htmlFor="quantity" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Quantity</label>
            <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(()=> Number(e.target.value) )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10" required />
        </div>
        
        
    </div>
    <div className="mb-6">
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <input type="text" id="description" value={notes} onChange={(e) => setNotes(()=> e.target.value )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required />
    </div> 
    <div className="mb-6">
         <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
  <select id="categories" value={category} onChange={(e) => setCategory(()=> e.target.value )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

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
        <input type="text" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(()=> e.target.value )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://picsum.photos/200/300" required />
    </div> 
    
    <Button type="submit"  variant="destructive" className="bg-[#C07858] font-bold  m-1 shrink-0  text-white hover:scale-110 hover:text-[#ede7e5]  hover:bg-[#3C3D42]  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2" >Add </Button>
       <Link to={"/home"}><Button  variant="destructive" className="bg-[#C07858] font-bold  m-1 shrink-0  text-white hover:scale-110 hover:text-[#ede7e5]  hover:bg-[#3C3D42]  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2">Back</Button></Link>
     
</form>

    </div>









    </>
  )
}

export default AddItem
