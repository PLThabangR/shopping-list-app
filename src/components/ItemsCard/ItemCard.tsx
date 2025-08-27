import { Button } from "../ui/button"
import { useDispatch, useSelector } from "react-redux";
import { deleteItem,updateItem } from "@/components/redux-toolkit/app/features/itemSlice";
import { toast } from "sonner";


interface ItemCardProps {
    name:string,
    email:string,
    quantity:number,
    notes:string,
    category:string,
    imageUrl:string
}


const ItemCard = (item:ItemCardProps) => {
 const dispatch = useDispatch();
 
 const openModal = () => {
     
 }

 const deleteProduct =async () => {
     
    //delete item from json server
    const response = await  fetch(`http://localhost:8000/items/${item.email}`,{method:'DELETE'})

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
        <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
        </a>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.quantity}</div>
       <Button variant="destructive" type='submit' onClick={openModal}   className='bg-[#C07858] font-bold  m-1 shrink-0  text-white hover:scale-110 hover:text-[#ede7e5]  hover:bg-[#3C3D42]'>Update</Button>
       <Button variant="destructive" type='submit' onClick={deleteProduct}  className='bg-[#3C3D42] font-bold  m-1 shrink-0  text-white hover:scale-110 hover:text-[#ede7e5 ]  hover:bg-[#FF0033]'>Delete</Button>
    </div>
</div>





    </div>
  )
}

export default ItemCard