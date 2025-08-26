import ItemCard from "@/components/ItemsCard/ItemCard"
import Navbar from "@/components/navbar/Navbar"
import { Card } from "@/components/ui/card"

const Home = () => {
  return (
    <div className="h-screen">
     
    <Navbar/>
        <h1 className="text-2xl shrink-0 font-extrabold text-[#3C3D42] md:text-5xl text-center  m-2 p-2"><span className="text-[#C07858] ">Welcome</span> to your shopping list</h1>
        <p className="text-1xl font-light shrink-0 text-[#3C3D42] md:text-2xl text-center  m-1 p-1">Let you shopping plan become a success</p>
          
        <div className="flex flex-col justify-center items-center  md:flex-row md:justify-evenly md:flex-wrap gap-1 ">
        <ItemCard/>
          
        </div>
    </div>
  )
}

export default Home