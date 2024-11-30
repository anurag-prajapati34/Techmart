import React from 'react'
import { useContext } from 'react'
import {FirebaseAuthContext} from '../contexts/FirebaseAuthContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
import { useState } from 'react'
import {faX,faBars} from '@fortawesome/free-solid-svg-icons'
import MenuSideBar from './MenuSideBar'
const NavBar = () => {
  const {logedInUser,logOut}=useContext(FirebaseAuthContext)
  const [isPorfilePopup,setisProfilePopup]=useState(false);
  const [menuBar,setMenuBar]=useState(false);
  const handleMenuBarToggle=()=>{
    if(menuBar) {setMenuBar(false)}
    else{setMenuBar(true)};
  }
  return (
 <div className='w-full bg-[var(--primary-color)]'>
     <div className='w-full flex justify-between py-2 text-white text-start max-w-[1280px] sm:px-4 px-2 m-auto items-center  relative'>
        <div>
        <div
        to={"/"}
        
        className={`  font-bold font-sans text-xl cursor-pointer border-2 border-[white] rounded-full px-4 py-1 `}
      >
        Admin pannel
      </div>
            
        </div>

<div className='flex gap-4  sm-hide'>
<NavLink to={'/orders'}>Orders</NavLink>
  <NavLink to={'/'}>Add product</NavLink>
  <NavLink to={'/listedProducts'}>Products</NavLink>
  <NavLink to={'/dashboard'}>Dashboard</NavLink>
 
</div>

       <div className='text-end h-full flex gap-2 itmes-center text-lg'>
    <FontAwesomeIcon onClick={()=>isPorfilePopup?setisProfilePopup(false):setisProfilePopup(true)} icon={faUser}/>
    <FontAwesomeIcon className='sm:hidden' onClick={()=>menuBar?setMenuBar(false):setMenuBar(true)} icon={faBars}/>
       </div>


       <div className={`absolute bg-[white] z-40 top-[100%] mt-5 mr-3 right-0 max-w-[90vw] w-[400px]  shadow-lg px-4 py-5 flex flex-col gap-2 text-black font-semibold ${isPorfilePopup?'visible':'hidden'}`}>
<h1>{logedInUser?.email}</h1>

<h1 onClick={logOut} className="text-red-700 cursor-pointer">Logout</h1>

<FontAwesomeIcon onClick={()=>setisProfilePopup(false)} className="absolute top-2 left-4 cursor-pointer" icon={faX}/>
</div>
    </div>

    {/**menu bar */}


 <MenuSideBar isMenu={menuBar} handleMenuBarToggle={handleMenuBarToggle}/>
 </div>
  )
}

export default NavBar