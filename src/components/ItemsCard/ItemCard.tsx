



interface ItemCardProps {
    name:string,
    email:string,
    quantity:number,
    notes:string,
    category:string,
    imageUrl:string
}


const ItemCard = (item:ItemCardProps) => {
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
        <div  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {item.notes}
            
        </div>
    </div>
</div>





    </div>
  )
}

export default ItemCard