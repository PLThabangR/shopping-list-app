import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/button'
import Home from './components/pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <div className="flex min-h-svh flex-col items-center justify-center">
        <Home/>
    </div>

    </>
  )
}

export default App
