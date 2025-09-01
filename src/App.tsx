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
import Protected from './components/pages/protectedPages/Protected';
import Profile from './components/pages/Profile/Profile';
import AddItem from './components/AddItems/AddItem';
import { useSelector } from 'react-redux';
import type { User } from './types/User';
function App() {
  //find the current user from the auth state 
const user:User = useSelector((state: any) => state.auth.user);
  return (
    <>

      
      <BrowserRouter>
        <Routes>
          
          <Route path="/register" element={<Registration/>} />
           <Route path="/" element={<Login/>} />
           <Route path="/landing" element={<LandingPage/>} />

           <Route path="/home" element={<Protected><Home /></Protected>} />
           {/* This is a protected route passing the user object as a prop */}
           <Route path="/profile" element={<Protected><Profile {...user} /></Protected>} />
           <Route path="/add-item" element={<Protected><AddItem /></Protected>} />
        </Routes>

      </BrowserRouter>

      <Toaster  position="top-center"/>

    </>
  )
}

export default App
