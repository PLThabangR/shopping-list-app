import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/button'
import Home from './components/pages/home/Home'

//import sonner toast
import { Toaster } from "@/components/ui/sonner";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Registration from './components/pages/forms/registration/Registration';
import Login from './components/pages/forms/login/Login';
import LandingPage from './components/pages/landingPage/LandingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/landing" element={<LandingPage/>} />
        </Routes>

      </BrowserRouter>

      <Toaster  position="top-center"/>

    </>
  )
}

export default App
