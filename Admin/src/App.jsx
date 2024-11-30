

import './App.css'


import {Outlet,useNavigate} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

import { useEffect } from 'react'
import { useContext } from 'react'
import { FirebaseAuthContext } from './contexts/FirebaseAuthContext'
import { NavBar } from './components/NavBar/NavBar'



function App() {
  const {logedInUser}=useContext(FirebaseAuthContext)
  const navigate=useNavigate()
 
  useEffect(()=>{
    if(!logedInUser){
navigate('/login')
    }
  },[logedInUser])

  return (
   <>
    <div className='min-h-[100vh] h-full'>
     
     <NavBar/>
     
    
     <div className=' flex-col max-w-[1280px] m-auto'>
 


      <Outlet/>


     </div>
    

    </div>
    <Toaster/>
   
   </>
  )
}

export default App
