
import { createRoot } from 'react-dom/client'
//import Router from './Router.tsx'
import React from 'react'
import './index.css'
import App from './App.tsx'
//our store
import { store } from './components/redux-toolkit/app/store.ts'
//import Provider
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
//  <StrictMode>
  <Provider store={store}> 
 <App />
     </Provider>
    
    
    
    

)
