import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/button'
import Home from './components/pages/home/Home'

//import sonner toast
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <div className="flex min-h-svh flex-col items-center justify-center">
        <Home/>

           <Toaster position='top-center'/>
    </div>

    </>
  )
}

export default App
