import type { Item } from '@/types/ShoppingList';
import React, { useState } from 'react'

const AddItem =async () => {
    const [shoppingList, setShoppingList] = React.useState([]);

    const [name,setName] = useState<string>('');
    const [quantity,setQuantity] = useState<number>(0);
    const [notes,setNotes] = useState<string>('');
    const [category,setCategory] = useState<string>('');
    const [imageUrl,setImageUrl] = useState<string>('');

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        //creat new item
        const newItem:Item = {
            name,
            quantity,
            notes,
            category,
            imageUrl
        }

        //add new item to shopping list
//Post item to json server
const response =await fetch('http://localhost:8000/shoppingList', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newItem),    
})  

     if(response.ok){
        const data = await response.json();
        console.log(data);

        //setShoppingList([...shoppingList,data]);
        //clear form
        setName('');
        setQuantity(0);
        setNotes('');
        setCategory('');
        setImageUrl('');
  

      
    }

  return (
    <div>

 <div className="container p-5 w-[60%] m-0 mx-auto">

        <h1 className="text-5xl font-extrabold text-[#3C3D42]  m-5 p-2">Add Item</h1>
<form onSubmit={handleSubmit}>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        
        <div>
            <label htmlFor="first_name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" id="first_name" value={name} onChange={(e) => setName(()=> e.target.value )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bread" required />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Quantity</label>
            <input type="text" id="last_name" value={quantity} onChange={(e) => setQuantity(()=> Number(e.target.value) )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
        </div>
        
        
    </div>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
        <input type="email" id="email" value={notes} onChange={(e) => setNotes(()=> e.target.value )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    </div> 
    <div className="mb-6">
        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">category</label>
        <input type="category" id="category" value={category} onChange={(e) => setCategory(()=> e.target.value )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
    </div> 

    <div className="mb-6">
        <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item image</label>
        <input type="text" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(()=> e.target.value )} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="082 1234 1234" required />
    </div> 
    
    <button type="submit" className="text-white bg-[#C07858] hover:bg-[#cc927a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add item</button>
     
</form>

      



    </div>


    </div>
  )
}

export default AddItem